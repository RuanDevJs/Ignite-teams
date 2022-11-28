import { TouchableOpacityProps } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECCONDARY';
export type ButtonTypeTitleProps = string;

export interface ButtonStyledProps  {
  color: ButtonTypeStyleProps;
}

export interface ButtonTitleProps  {
  title: ButtonTypeTitleProps;
}

export interface ButtonProps extends TouchableOpacityProps  {
  title?: ButtonTypeTitleProps;
  color?: ButtonTypeStyleProps;
}
