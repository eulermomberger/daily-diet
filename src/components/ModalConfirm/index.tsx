import { Button } from '@components/Button';

import { ButtonContainer, ButtonsGroup, Modal, ModalBackdrop, ModalContainer, Title, TitleArea } from './styles';

type ButtonType = {
  title: string;
  onPress: () => void;
  themeType: 'PRIMARY' | 'SECUNDARY';
};

type Props = {
  isModalVisible: boolean;
  title: string;
  buttons: ButtonType[];
};

export function ModalConfirm ({ isModalVisible, title, buttons }: Props) {
  return (
    <Modal visible={isModalVisible} transparent>
      <ModalBackdrop>
        <ModalContainer>
          <TitleArea>
            <Title>{title}</Title>
          </TitleArea>

          <ButtonsGroup>
            {buttons.map((button, index) => (
              <ButtonContainer key={index}>
                <Button
                  title={button.title}
                  onPress={button.onPress}
                  themeType={button.themeType}
                />
              </ButtonContainer>
            ))}
          </ButtonsGroup>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
}
