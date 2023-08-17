import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { MealDTO } from '@customTypes/MealDTO';

export async function mealCreate (newMeal: MealDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
