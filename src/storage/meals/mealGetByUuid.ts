import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealDTO } from '@customTypes/MealDTO';

export async function mealGetByUuid (uuid: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    const meal = meals.find((meal) => meal.uuid === uuid);

    if (meal) {
      return ({ ...meal, date: new Date(meal.date) });
    } else {
      throw new Error;
    }
  } catch (error) {
    throw error;
  }
}
