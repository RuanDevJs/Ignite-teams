import { useEffect, useState, useRef } from 'react';
import { Alert, FlatList, TextInput, TextInputProps } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import playerAddByGroup from '@storage/players/playerAddByGroup';
import playerRemoveByGroup from '@storage/players/playerRemoveByGroup';
import { playersGetByGroup } from '@storage/players/playersGetByGroup';
import { playersGetByGrupAndTeam } from "@storage/players/playersGetByGroupAndTeam";

import Header from '@components/Header';
import Highlight from '@components/Hightlight';

import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';

import Filter from '@components/Filter';
import PlayerCard from '@components/PlayerCard';

import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

import AppError from '@utils/AppError';
import { PlayerStorgaDTO } from '@storage/players/PlayerStorageDTO';

import removeGroup from '@storage/groups/removeGroup';

import * as Styled from "./styles";

type RouteParams = {
  group: string;
}

export default function Players() {
  const [teams, setTeams] = useState([
    {
      title: 'time a',
      value: 'team a',
      isActive: true
    },
    {
      title: 'time b',
      value: 'team b',
      isActive: false
    },
  ]);
  const [newPlayer, setNewPlayer] = useState<string>('');
  const [players, setPlayes] = useState<PlayerStorgaDTO[]>([] as PlayerStorgaDTO[]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  function handleActive(currentIndex: number) {
    setTeams(oldValue => oldValue.map(el => {
      el.isActive = false;
      return el;
    }));

    setTeams(oldValue => oldValue.map((el, index) => {
      index === currentIndex ? el.isActive = !el.isActive : null;
      return el;
    }));
  }

  async function handleAddPlayer() {
    if (!newPlayer.length) {
      return Alert.alert('New player', 'Please insert the new player\'s name!');
    }

    try {
      const activeTeam = teams.find(team => team.isActive === true);
      await playerAddByGroup({ name: newPlayer, team: activeTeam?.value || 'team a' }, group);

      await fetchPlayers();

      newPlayerRef.current?.clear();
      newPlayerRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('New player', error.message);
      } else {
        console.log(error);
        return Alert.alert('New player', 'It wasn\'t possible add');
      }
    }
  }

  async function handleRemovePlayer(playerName: string){
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayers();
    } catch(error) {
      console.log(error);
      Alert.alert('It was not possible remove ' + playerName);
    }
  }

  async function findPlayersByTeam(team: string) {
    const playersByTeam = await playersGetByGrupAndTeam(group, team);
    setPlayes(playersByTeam);
  }

  async function fetchPlayers(){
    const activeTeam = teams.find(team => team.isActive === true);
    const playersByGroup = activeTeam ? await playersGetByGrupAndTeam(group, activeTeam.value) : [];
    setPlayes(playersByGroup);
  }

  async function groupRemove(){
    await removeGroup(group);
    navigation.navigate('Groups')
  }

  async function handleRemove() {
    try {
      Alert.alert('Remove', `Are you sure you\'ll delete ${group} ?`, [
        {
          text: 'No',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => groupRemove()
        }
      ])
    } catch (e){
      console.log(e)
    }
  }

  useEffect(() => {
    (async () => {
      await fetchPlayers();
    })();
  }, []);

  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle='adicione a galera e separe os times'
      />
      <Styled.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
          onChangeText={e => setNewPlayer(e)}
          value={newPlayer}
          inputRef={newPlayerRef}
        />
        <ButtonIcon
          icon='add'
          type='PRIMARY'
          onPress={handleAddPlayer}
        />
      </Styled.Form>
      <Styled.HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(_, index) => `$team=${index}`}
          renderItem={({ item, index }) => (
            <Filter
              title={item.title}
              isActive={item.isActive}
              onPress={() => {
                handleActive(index);
                findPlayersByTeam(item.value)
              }} />
          )}
          horizontal
          showsHorizontalScrollIndicator
        />
        <Styled.PlayersLength>{players.length}</Styled.PlayersLength>
      </Styled.HeaderList>
      <FlatList
        data={players}
        keyExtractor={((_, index) => `$player=${index}`)}
        renderItem={({ item, index }) => (
          <PlayerCard
            icon='person'
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<ListEmpty message='Não há pessoas nesse time!' />}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title='Remover Turma' color='SECCONDARY' onPress={handleRemove} />
    </Styled.Container>
  )
}
