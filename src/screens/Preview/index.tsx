import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { ContainerRounded } from '@components/ContainerRounded';
import { Header } from '@components/Header';
import { ModalConfirm } from '@components/ModalConfirm';

import {
  BadgeDiet,
  ButtonsGroup,
  Container,
  Content,
  DateTitle,
  DietText,
  MealDate,
  MealDescription,
  MealTitle,
  StatusCircle,
} from './styles';

import { mealGetByUuid } from '@storage/meals/mealGetByUuid';
import { mealDelete } from '@storage/meals/mealDelete';

import { MealDTO } from '@customTypes/MealDTO';

type RouteParams = {
  uuid: string;
};

type Meal = Omit<MealDTO, 'date'> & {
  date: string;
};

export function Preview() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { COLORS } = useTheme();

  const fetchMeal = async (uuid: string) => {
    try {
      const storedMeal = await mealGetByUuid(uuid);

      setMeal({
        ...storedMeal,
        date: new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
          timeStyle: 'short',
        }).format(storedMeal.date).replace(' ', ' às '),
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar a refeição! Tente novamente mais tarde.');
      console.log(error);
    }
  };

  const handleCancelDelete = () => {
    setIsModalVisible(false);
  };

  const handleDelete = async () => {
    try {
      const { uuid } = route?.params as RouteParams;
      await mealDelete(uuid);

      setIsModalVisible(false);
      navigation.navigate('home');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a refeição! Tente novamente mais tarde.');
      console.log(error);
    }
  };

  const handleGoForm = (uuid: string) => {
    navigation.navigate('form', { uuid });
  };

  const handleOpenDeleteModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    const { uuid } = route?.params as RouteParams;
    fetchMeal(uuid);
  }, [route?.params]);

  if (!meal) {
    return <></>;
  }

  return (
    <Container type={meal.isOnDiet ? 'PRIMARY' : 'SECUNDARY'}>
      <Header
        title='Refeição'
        showBackIcon
        themeType={meal.isOnDiet ? 'PRIMARY' : 'SECUNDARY'}
      />

      <ContainerRounded>
        <Content>
          <View>
            <MealTitle>{meal.name}</MealTitle>

            <MealDescription>{meal.description}</MealDescription>

            <DateTitle>Data e hora</DateTitle>
            <MealDate>{meal.date}</MealDate>

            <BadgeDiet>
              <StatusCircle type={meal.isOnDiet ? 'PRIMARY' : 'SECUNDARY'}/>
              <DietText>
                {meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
              </DietText>
            </BadgeDiet>
          </View>

          <ButtonsGroup>
            <Button
              title='Editar refeição'
              icon={<PencilSimpleLine color={COLORS.WHITE}/>}
              onPress={() => handleGoForm(meal.uuid)}
            />

            <Button
              title='Excluir refeição'
              themeType='SECUNDARY'
              icon={<Trash color={COLORS.GRAY_700}/>}
              onPress={handleOpenDeleteModal}
            />
          </ButtonsGroup>
        </Content>
      </ContainerRounded>

      <ModalConfirm
        isModalVisible={isModalVisible}
        title='Deseja realmente excluir o registro da refeição?'
        buttons={[
          { title: 'Cancelar', onPress: handleCancelDelete, themeType: 'SECUNDARY' },
          { title: 'Sim, excluir', onPress: handleDelete, themeType: 'PRIMARY' },
        ]}
      />
    </Container>
  );
}
