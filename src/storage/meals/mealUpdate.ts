import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { MealDTO } from '@customTypes/MealDTO';

export async function mealUpdate (meal: MealDTO) {
  try {
    let storedMeals = await mealsGetAll();

    storedMeals = storedMeals.filter((m) => m.uuid !== meal.uuid);

    const storage = JSON.stringify([...storedMeals, meal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
