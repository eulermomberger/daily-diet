import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealDTO } from '@customTypes/MealDTO';

export async function mealsGetAll () {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals.map((meal) => ({ ...meal, date: new Date(meal.date) }));
  } catch (error) {
    throw error;
  }
}
