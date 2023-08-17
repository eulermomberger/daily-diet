import { useCallback, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

import { MealsPercent } from '@components/MealsPercent';
import { ContainerRounded } from '@components/ContainerRounded';
import { DashboardCard } from '@components/DashboardCard';

import { CardGroup, Container, Header, Title } from './styles';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { calculateBestSequence, calculateMealsPercentage, getMealsSizeByStatus } from '@utils/meals';

export function Dashboard() {
  const [percentage, setPercentage] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [isOnDietSize, setIsOnDietSize] = useState(0);
  const [isNotOnDietSize, setIsNotOnDietSize] = useState(0);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('home');
  };

  const fetchMeals = async () => {
    try {
      const storedMeals = await mealsGetAll();

      setPercentage(calculateMealsPercentage(storedMeals));
      setBestSequence(calculateBestSequence(storedMeals));
      setTotalSize(storedMeals.length);
      setIsOnDietSize(getMealsSizeByStatus(storedMeals, true));
      setIsNotOnDietSize(getMealsSizeByStatus(storedMeals, false));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as refeições! Tente novamente mais tarde.');
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container type={percentage >= 70 ? 'PRIMARY' : 'SECUNDARY'}>
      <Header>
        <TouchableOpacity onPress={handleGoHome} >
          <ArrowLeft
            size={24}
            color={percentage >= 70 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          />
        </TouchableOpacity>
        <MealsPercent percentage={percentage} />
      </Header>

      <ContainerRounded>
        <Title>Estatísticas gerais</Title>

        <View>
          <DashboardCard
            themeType='DEFAULT'
            number={bestSequence}
            label='melhor sequência de pratos dentro da dieta'
          />

          <DashboardCard
            themeType='DEFAULT'
            number={totalSize}
            label='refeições registradas'
          />

          <CardGroup>
            <DashboardCard
              themeType='PRIMARY'
              number={isOnDietSize}
              label='refeições dentro da dieta'
            />

            <DashboardCard
              themeType='SECUNDARY'
              number={isNotOnDietSize}
              label='refeições fora da dieta'
            />
          </CardGroup>
        </View>
      </ContainerRounded>
    </Container>
  );
}
