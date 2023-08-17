import { MealDTO } from '@customTypes/MealDTO';
import { MealListDTO } from '@customTypes/MealListDTO';

export const groupMealsByDate = async (meals: MealDTO[]) => {
  try {
    const mealsByDate: MealListDTO[] = [];

    meals
      .sort((previous, current) => current?.date?.getTime() - previous?.date?.getTime())
      .forEach((meal) => {
        const date = new Date(meal.date);
        date.setHours(0, 0, 0, 0);

        const index = mealsByDate.findIndex((mbd) => mbd.date.getTime() === date.getTime());
        if (index >= 0) {
          mealsByDate[index].data.push(meal);
        } else {
          mealsByDate.push({
            date,
            data: [meal]
          });
        }
      });

    return mealsByDate;
  } catch (error) {
    throw error;
  }
};

export const formatDateTitle = (date: Date) => {
  const formatedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(date);

  return formatedDate.replaceAll('/', '.');
};

export const calculateMealsPercentage = (meals: MealDTO[]) => {
  const mealsOnDiet = meals.filter((meal) => meal.isOnDiet);

  return mealsOnDiet.length / meals.length * 100;
};

export const calculateBestSequence = (meals: MealDTO[]) => {
  let currentSequence = 0;
  let bestSequence = 0;

  meals
    .sort((previous, current) => current?.date?.getTime() - previous?.date?.getTime())
    .forEach((meal) => {
      if (meal.isOnDiet) {
        currentSequence += 1;

        if (currentSequence > bestSequence) {
          bestSequence = currentSequence;
        }
      } else {
        currentSequence = 0;
      }
    });

  return bestSequence;
};

export const getMealsSizeByStatus = (meals: MealDTO[], isOnDiet: boolean) => (
  meals.filter((meal) => meal.isOnDiet === isOnDiet).length
);
