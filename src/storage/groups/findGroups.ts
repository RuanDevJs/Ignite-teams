import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "@storage/storageConfig";

export async function findGroups(): Promise<string[]>{
  try {
    const storage = await AsyncStorage.getItem(Config.GROUP_CONFIG);
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error){
    throw error;
  }
}

export async function findGroupsByName(groupName: string): Promise<boolean>{
  try {
    const storage = await AsyncStorage.getItem(Config.GROUP_CONFIG);
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups.includes(groupName);
  } catch (error) {
    throw error;
  }
}
