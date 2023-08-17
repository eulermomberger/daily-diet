import 'react-native-get-random-values';
import { useEffect, useState } from 'react';
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { v4 as uuidV4 } from 'uuid';

import { Button } from '@components/Button';
import { ContainerRounded } from '@components/ContainerRounded';
import { DateTimeInput } from '@components/DateTimeInput';
import { Header } from '@components/Header';
import { IsOnDietGroupButton } from '@components/IsOnDietGroupButton';
import { Input } from '@components/Input';

import { Container, FormContent, FormGroup } from './styles';

import { MealDTO } from '@customTypes/MealDTO';

import { mealCreate } from '@storage/meals/mealCreate';
import { mealGetByUuid } from '@storage/meals/mealGetByUuid';
import { mealUpdate } from '@storage/meals/mealUpdate';

type RouteParams = {
  uuid: string;
};

export function Form () {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [hour, setHour] = useState<Date | null>(null);
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);

  const route = useRoute();
  const navigation = useNavigation();

  const createNewMeal = async () => {
    try {
      if (name.trim().length === 0) {
        Alert.alert('Nova refeição', 'Informe o nome da refeição');
        return;
      }

      if (!date) {
        Alert.alert('Nova refeição', 'Informe a data da refeição');
        return;
      }

      if (!hour) {
        Alert.alert('Nova refeição', 'Informe a hora da refeição');
        return;
      }

      if (isOnDiet === null) {
        Alert.alert('Nova refeição', 'Informe se a refeição está dentro da dieta ou não');
        return;
      }
      
      const newMeal: MealDTO = {
        uuid: uuidV4(),
        name,
        description,
        date: new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          hour.getHours(),
          hour.getMinutes()
        ),
        isOnDiet,
      };

      await mealCreate(newMeal);

      navigation.navigate('feedback', { isOnDiet });
    } catch (error) {
      Alert.alert('Nova refeição', 'Não foi possível criar uma nova refeição!');
      console.log(error);
    }
  };

  const updateMeal = async () => {
    try {
      if (name.trim().length === 0) {
        Alert.alert('Editar refeição', 'Informe o nome da refeição');
        return;
      }

      if (!date) {
        Alert.alert('Editar refeição', 'Informe a data da refeição');
        return;
      }

      if (!hour) {
        Alert.alert('Editar refeição', 'Informe a hora da refeição');
        return;
      }

      if (isOnDiet === null) {
        Alert.alert('Editar refeição', 'Informe se a refeição está dentro da dieta ou não');
        return;
      }

      const { uuid } = route?.params as RouteParams;

      const meal: MealDTO = {
        uuid,
        name,
        description,
        date: new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          hour.getHours(),
          hour.getMinutes()
        ),
        isOnDiet,
      };

      await mealUpdate(meal);

      navigation.navigate('feedback', { isOnDiet });
    } catch (error) {
      Alert.alert('Editar refeição', 'Não foi possível editar a refeição!');
      console.log(error);
    }
  }

  const fetchMeal = async (uuid: string) => {
    try {
      const storedMeal = await mealGetByUuid(uuid);

      setIsEditing(true);
      setName(storedMeal.name);
      setDescription(storedMeal.description || '');
      setDate(storedMeal.date);
      setHour(storedMeal.date);
      setIsOnDiet(storedMeal.isOnDiet);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar a refeição! Tente novamente mais tarde.');
      console.log(error);
    }
  };

  const handleSaveMeal = () => {
    if (isEditing) {
      updateMeal();
    } else {
      createNewMeal();
    }
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (route?.params) {
      const { uuid } = route?.params as RouteParams;
      fetchMeal(uuid);
    }
  }, [route?.params]);

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Container>
        <Header
          title={isEditing ? 'Editar refeição' : 'Nova refeição'}
          showBackIcon
        />

        <ContainerRounded>
          <FormContent>
            <ScrollView>
              <Input
                label='Nome'
                value={name}
                onChangeText={(text) => setName(text)}
              />

              <Input
                label='Descrição'
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
              />

              <FormGroup>
                <DateTimeInput
                  label='Data'
                  mode='date'
                  value={date}
                  onSetDate={setDate}
                />

                <DateTimeInput
                  label='Hora'
                  mode='time'
                  value={hour}
                  onSetDate={setHour}
                />
              </FormGroup>

              <IsOnDietGroupButton
                isOnDiet={isOnDiet}
                setIsOnDiet={setIsOnDiet}
              />
            </ScrollView>

            <Button
              title={isEditing ? 'Salvar alterações' : 'Cadastrar refeição'}
              onPress={handleSaveMeal}
            />
          </FormContent>
        </ContainerRounded>
      </Container>
    </TouchableWithoutFeedback>
  );
}
