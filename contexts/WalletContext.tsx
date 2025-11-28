import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Transaction {
  id: string;
  recipient: string;
  amount: number;
  serviceFee: number;
  timestamp: string;
  date: string;
}

interface WalletContextType {
  balance: number;
  transactions: Transaction[];
  deductBalance: (amount: number, recipient: string) => Promise<{ success: boolean; message?: string; timestamp?: string }>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedBalance = await AsyncStorage.getItem('walletBalance');
        const savedTransactions = await AsyncStorage.getItem('transactions');
        
        if (savedBalance) setBalance(parseFloat(savedBalance));
        if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
      } catch (error) {
        console.log('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('walletBalance', balance.toString()).catch(error => {
      console.log('Error saving balance:', error);
    });
  }, [balance]);

  useEffect(() => {
    AsyncStorage.setItem('transactions', JSON.stringify(transactions)).catch(error => {
      console.log('Error saving transactions:', error);
    });
  }, [transactions]);

  const deductBalance = async (amount: number, recipient: string): Promise<{ success: boolean; message?: string }> => {
    const SERVICE_CHARGE = 2;
    const totalDeduction = amount + SERVICE_CHARGE;

    if (balance < totalDeduction) {
      return {
        success: false,
        message: `Insufficient balance. Your available balance is ₦${balance.toFixed(2)}`,
      };
    }

    const now = new Date();
    const transaction: Transaction = {
      id: Date.now().toString(),
      recipient,
      amount,
      serviceFee: SERVICE_CHARGE,
      timestamp: now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }),
      date: now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
    };

    setBalance(balance - totalDeduction);
    setTransactions([transaction, ...transactions]); 

    return { success: true, timestamp: transaction.timestamp };
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, deductBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};