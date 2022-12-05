import AsyncStorage from "@react-native-async-storage/async-storage";

import { TOKEN_COLLECTION } from "@storage/storageConfig";

export async function getToken(){
    try {
        const storage = await AsyncStorage.getItem(TOKEN_COLLECTION)

        const token: string[] = storage ? JSON.parse(storage) : [];

        return token;
    } catch (error) {
        return error;
    }
}