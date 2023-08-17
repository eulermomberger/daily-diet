import { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Keyboard,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import * as Device from 'expo-device';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Input } from '@components/Input';

import {
  CalendarArea,
  CalendarLabel,
  CalendarLabelArea,
  Container,
  DateTimePicker,
  Modal,
  ModalContainer
} from './styles';

import { formatDate, formatTime } from '@utils/helpers';

type Props = {
  label: string;
  mode: 'date' | 'time';
  value: Date | null;
  onSetDate: (date: Date) => void;
};

export function DateTimeInput ({ label, mode, value, onSetDate }: Props) {
  const [date, setDate] = useState(value || new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState(
    mode === 'date' ? formatDate(value) : formatTime(value)
  );

  const inputRef = useRef<TextInput>(null);

  const onChangeValueDatePicker = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (!selectedDate) return;

    setDate(selectedDate);

    if (Device.osName === 'Android') {
      if (event.type === 'set') {
        handleSetDateValue(selectedDate);
      } else if (event.type === 'dismissed') {
        handleCancel();
      }
    }
  };

  const handleCancel = () => {
    setShowDatePicker(false);
    setDate(value || new Date());
  };

  const handleFocusInput = (evt: NativeSyntheticEvent<TextInputFocusEventData>) => {
    evt.preventDefault();
    Keyboard.dismiss();
    inputRef.current?.blur();
  };

  const handleSetDateValue = (selectedDate: Date) => {
    if (mode === 'date') {
      setDateValue(formatDate(selectedDate));
    } else {
      setDateValue(formatTime(selectedDate));
    }

    onSetDate(selectedDate);
    setShowDatePicker(false);
  };

  const handleShowDatepicker = () => {
    setShowDatePicker(true);
  };

  useEffect(() => {
    setDate(value || new Date());
    setDateValue(mode === 'date' ? formatDate(value) : formatTime(value));
  }, [value]);

  return (
    <>
      <Container>
        <TouchableWithoutFeedback onPress={handleShowDatepicker}>
          <Input
            label={label}
            value={dateValue}
            onPressIn={handleShowDatepicker}
            onFocus={handleFocusInput}
            inputRef={inputRef}
          />
        </TouchableWithoutFeedback>
      </Container>

      {
        Device.osName === 'Android'
        ? (
          showDatePicker && <DateTimePicker
            value={date}
            mode={mode}
            onChange={onChangeValueDatePicker}
          />
        )
        : (
          <Modal
            visible={showDatePicker}
            transparent
          >
            <TouchableWithoutFeedback onPress={() => setShowDatePicker(false)}>
              <ModalContainer>
                <CalendarArea>
                  <DateTimePicker
                    value={date}
                    mode={mode}
                    onChange={onChangeValueDatePicker}
                  />

                  <CalendarLabelArea>
                    <TouchableOpacity onPress={handleCancel}>
                      <CalendarLabel>Cancelar</CalendarLabel>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSetDateValue(date)}>
                      <CalendarLabel>Ok</CalendarLabel>
                    </TouchableOpacity>
                  </CalendarLabelArea>
                </CalendarArea>
              </ModalContainer>
            </TouchableWithoutFeedback>
          </Modal>
        )
      }
    </>
  );
}
