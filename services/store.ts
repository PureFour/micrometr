import { AsyncStorage } from "react-native";

export const STORAGE_KEYS = {
    TOTAL_KILOMETERS: "totalKilometers",
    CURRENT_KILOMETERS: "currentKilometers",
    OUR_KILOMETERS: "ourKilometers",
};

export const Storage = {
    saveData: async (data: any, storageKey: string) => {
        const jsonValue = JSON.stringify(data);
        try {
            await AsyncStorage.setItem(storageKey, jsonValue);
            console.log(
                "Saved [key: " + storageKey + "data: " + jsonValue + "]"
            );
        } catch (e) {
            console.log(
                "Error saving [key: " + storageKey + "data: " + jsonValue + "]"
            );
        }
    },
    getData: async (storageKey: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(storageKey);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("Error loading [key: " + storageKey + "]");
        }
    },
};
