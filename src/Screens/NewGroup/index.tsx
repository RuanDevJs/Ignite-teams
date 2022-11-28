import { useCallback, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Hightlight";
import Input from "@components/Input";

import { groupCreate } from "@storage/groups/storeGroups";
import * as Styled from "./styles";
import AppError from "@utils/AppError";

export default function NewGroup() {
  const [contar, setContar] = useState(0);

  const [className, setClassName] = useState<string>('');
  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(className);
      navigation.navigate('Players', { group: className });
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('New Group', error.message);
      }else {
        Alert.alert('New Group', 'It was no possible to create the group :(');
      }
    }
  }

  return (
    <Styled.TouchableWithoutFeedbackContainer onPress={Keyboard.dismiss}>
      <Styled.KeyboardContainer>
        <Styled.Container>
          <Header showBackButton />
          <Styled.Content>
            <Styled.Icon />
            <Highlight
              title="Nova turma"
              subtitle={`crie uma turma para \n adicionar as pessoas`}
            />

            <Input
              placeholder="Nome da turma"
              onChangeText={value => setClassName(value.trim())}
            />

            <Button
              title="Criar"
              style={{ marginTop: 20 }}
              activeOpacity={0.72}
              onPress={handleNew}
            />
          </Styled.Content>
        </Styled.Container>
      </Styled.KeyboardContainer>
    </Styled.TouchableWithoutFeedbackContainer>
  )
}

