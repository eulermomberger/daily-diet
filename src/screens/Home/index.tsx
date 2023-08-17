import { useCallback, useState } from 'react';
import { Alert, SectionList, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { HomeHeader } from '@components/HomeHeader';
import { MealsPercentageCard } from '@components/MealsPercentageCard';
import { MealCard } from '@components/MealCard';

import { Container, ContainerContent, DateTitle, MealsSubtitle } from './styles';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { calculateMealsPercentage, formatDateTitle, groupMealsByDate } from '@utils/meals';

import { MealListDTO } from '@customTypes/MealListDTO';

export function Home () {
  const [meals, setMeals] = useState<MealListDTO[]>([]);
  const [percentage, setPercentage] = useState<number | null>(null);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const fetchMeals = async () => {
    try {
      const storedMeals = await mealsGetAll();

      const mealsByDate = await groupMealsByDate(storedMeals);

      if (mealsByDate) {
        setMeals(mealsByDate);
        setPercentage(calculateMealsPercentage(storedMeals));
      }

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as refeições! Tente novamente mais tarde.');
      console.log(error);
    }
  };

  const handleGoDashboard = () => {
    navigation.navigate('dashboard');
  };

  const handleGoPreview = (uuid: string) => {
    navigation.navigate('preview', { uuid });
  };

  const handleNewMeal = () => {
    navigation.navigate('form');
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HomeHeader />

      <ContainerContent>
        {percentage !== null && (
          <MealsPercentageCard
            percentage={percentage}
            onPress={handleGoDashboard}
          />
        )}

        <View>
          <MealsSubtitle>Refeições</MealsSubtitle>
          <Button
            title='Nova refeição'
            icon={<Plus color={COLORS.WHITE} size={20} />}
            onPress={handleNewMeal}
          />
        </View>

        <SectionList
          sections={meals}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <MealCard
              meal={item}
              onPress={() => handleGoPreview(item.uuid)}
            />
          )}
          renderSectionHeader={({ section }) => (
            <DateTitle>
              {formatDateTitle(section.date)}
            </DateTitle>
          )}
          stickySectionHeadersEnabled={false}
        />
      </ContainerContent>
    </Container>
  );
}
