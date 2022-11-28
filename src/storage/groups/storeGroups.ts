import AsyncStorage from "@react-native-async-storage/async-storage";

import Config from "@storage/storageConfig";
import { findGroups, findGroupsByName } from "@storage/groups/findGroups";

import AppError from "@utils/AppError";

export async function groupCreate(newGroupName: string): Promise<void> {
  try {
    const storagedGroups = await findGroups();
    const storage = [...storagedGroups, newGroupName];

    const foundGroups = await findGroupsByName(newGroupName);

    if (foundGroups) {
      throw new AppError("This group already exists! 😶");
    }

    if (!newGroupName.length) {
      throw new AppError("Have you forgot the name ? 😶");
    }

    await AsyncStorage.setItem(Config.GROUP_CONFIG, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
