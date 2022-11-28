import { Dimensions, Platform } from "react-native"
import { DeviceProps } from "src/@types/Utils/Device"

export const Device: DeviceProps = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  plataform: Platform.OS,
  behavior: Platform.OS === 'ios' ? 'padding' : 'height'
}
