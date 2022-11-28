import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import Header from "@components/Header";
import Highlight from "@components/Hightlight";
import GroupCard from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

import * as Styled from "./styles";
import { findGroups } from "@storage/groups/findGroups";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      const data = await findGroups();
      setGroups(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('Players', {
      group: group
    })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  )

  return (
    <Styled.Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={(_, index) => `key=${index}`}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            activeOpacity={0.72}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : null}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma ?" />
        )}
      />

      <Button
        title={'Criar nova turma'}
        activeOpacity={0.52}
        onPress={handleNewGroup}
      />
    </Styled.Container>
  )
}
