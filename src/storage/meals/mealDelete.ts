import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealDTO } from '@customTypes/MealDTO';

export async function mealDelete (uuid: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    let meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    meals = meals.filter((meal) => meal.uuid !== uuid);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...meals]));
  } catch (error) {
    throw error;
  }
}
