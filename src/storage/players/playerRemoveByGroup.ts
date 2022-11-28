import AsyncStorage from "@react-native-async-storage/async-storage";
import AppError from "@utils/AppError";

import Config from "@storage/storageConfig";

import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorgaDTO } from "./PlayerStorageDTO";

export default async function playerRemoveByGroup(playeName: string, group: string){
  try {
    const storedPlayers = await playersGetByGroup(group);

    const updatedPlayers = storedPlayers.filter(player => player.name !== playeName);

    const storage = JSON.stringify(updatedPlayers);

    await AsyncStorage.setItem(`${Config.PLAYER_CONFIG}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
