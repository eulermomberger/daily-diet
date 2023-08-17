import { TextInput, TextInputProps } from 'react-native';

import { Container, Field, Label } from './styles';

type Props = TextInputProps & {
  label: string;
  multiline?: boolean;
  inputRef?: React.RefObject<TextInput>;
};

export function Input ({ label, multiline, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field
        multiline={multiline}
        {...rest}
      />
    </Container>
  );
}
