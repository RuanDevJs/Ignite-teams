import ButtonIcon from "@components/ButtonIcon";
import { MaterialIcons } from "@expo/vector-icons"

import * as Styled from "./styles";

type PlayerCardProps =  {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onRemove?: () => void;
}

export default function PlayerCard({ name, icon, onRemove }: PlayerCardProps) {
  return (
    <Styled.Container>
      <Styled.Icon
        name={icon}
      />
      <Styled.Name>{name}</Styled.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Styled.Container>
  )
}
