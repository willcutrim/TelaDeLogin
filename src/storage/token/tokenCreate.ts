import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_COLLECTION } from "@storage/storageConfig";
import { getToken } from "./getToken";

export async function tokenCreate(newtoken: string) {
    try {
        const storedToken = await getToken();
        const token = JSON.stringify(...storedToken, newtoken);
        await AsyncStorage.setItem(TOKEN_COLLECTION, token);
    } catch (error) {
        throw error;
    }
}