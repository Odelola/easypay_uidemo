import { CircledPlusIcon, HouseIcon, InternetIcon, InvestmentIcon, LightningIcon, MoreIcon, SendIcon, TVIcon, VehicleIcon, WaterIcon, WithdrawIcon } from "@/assets/svgs";

export interface ONBOARDING_DATA_TYPE {
    heading: string[];
    paragraph: string[]
}

export const ONBOARDING_DATA: ONBOARDING_DATA_TYPE[] = [
    {
        heading: [
            "Easy Online Payment",
        ],
        paragraph: [
            "Make your payment experience more better",
            " today. No additional admin fee",
        ]
    },
    {
        heading: [
            "Easy Online Payment",
        ],
        paragraph: [
            "Make your payment experience more better",
            " today. No additional admin fee",
        ]
    },
    {
        heading: [
            "Easy Online Payment",
        ],
        paragraph: [
            "Make your payment experience more better",
            " today. No additional admin fee",
        ]
    },
];

export interface QUICKACTIONS_DATA_TYPE {
    icon: React.FC,
    actionName: string;
    onPress: () => void;
}

export const QUICKACTIONS_DATA: QUICKACTIONS_DATA_TYPE[] = [
    {
        icon: CircledPlusIcon,
        actionName: "Top Up",
        onPress: () => null
    },
    {
        icon: SendIcon,
        actionName: "Send",
        onPress: () => null
    },
    {
        icon: WithdrawIcon,
        actionName: "Withdraw",
        onPress: () => null
    },
];

export interface SERVICES_DATA_TYPE {
    icon: React.FunctionComponent,
    serviceName: string;
    onPress: () => void;
}

export const SERVICES_DATA: SERVICES_DATA_TYPE[] = [
    {
        icon: InternetIcon,
        serviceName: "Internet",
        onPress: () => null
    },
    {
        icon: WaterIcon,
        serviceName: "Water",
        onPress: () => null
    },
    {
        icon: LightningIcon,
        serviceName: "Electricity",
        onPress: () => null
    },
    {
        icon: TVIcon,
        serviceName: "TV Cable",
        onPress: () => null
    },
    {
        icon: VehicleIcon,
        serviceName: "Vehicle",
        onPress: () => null
    },
    {
        icon: HouseIcon,
        serviceName: "Rent Bill",
        onPress: () => null
    },
    {
        icon: InvestmentIcon,
        serviceName: "Invest",
        onPress: () => null
    },
    {
        icon: MoreIcon,
        serviceName: "More",
        onPress: () => null
    }
];

export interface SPECIAL_DEALS_DATA_TYPE {
    heading: string[];
    paragraph: string[];
    background: string;
}

export const SPECIAL_DEALS_DATA: SPECIAL_DEALS_DATA_TYPE[] = [
    {
        heading: [
            "50% OFF",
            "Summer special deal",
        ],
        paragraph: [
            "Get discount for every",
            " transaction",
        ],
        background: "#D6E1FF"
    },
    {
        heading: [
            "50% OFF",
            "Summer special deal",
        ],
        paragraph: [
            "Get discount for every",
            " transaction",
        ],
        background: "#FCB3C5"
    },
    {
        heading: [
            "50% OFF",
            "Summer special deal",
        ],
        paragraph: [
            "Get discount for every",
            " transaction",
        ],
        background: "#FFF2CF"
    },
]