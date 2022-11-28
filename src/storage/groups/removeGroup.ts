import AsyncStorage from "@react-native-async-storage/async-storage";
import AppError from "@utils/AppError";

import Config from "@storage/storageConfig";
import { findGroups } from "./findGroups";

export default async function removeGroup(groupName: string){
  try {
    const groupsCreated = await findGroups();

    const updatedGroup = groupsCreated.filter(el => el !== groupName);
    const parsedUpdatedGroup = JSON.stringify(updatedGroup);

    await AsyncStorage.setItem(`${Config.GROUP_CONFIG}`, parsedUpdatedGroup);
    await AsyncStorage.removeItem(`${Config.PLAYER_CONFIG}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
