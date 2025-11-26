import { PixelRatio } from "react-native";

const fontscale = PixelRatio.getFontScale();
const getTextFontSize = (size: number) => size / fontscale
const giveSvgFontSize = (size: number) => {
    return { width: size / fontscale, height: size / fontscale }
}

const getFontSize = {
    getTextFontSize,
    giveSvgFontSize
}
export default getFontSize