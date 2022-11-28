import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorgaDTO } from "./PlayerStorageDTO";

import Config from "@storage/storageConfig";

export async function playersGetByGroup(group: string): Promise<PlayerStorgaDTO[]>{
  try {
    const storage = await AsyncStorage.getItem(`${Config.PLAYER_CONFIG}-${group}`);
    return storage ? JSON.parse(storage) : [];
  } catch(error) {
    throw error;
  }
}
