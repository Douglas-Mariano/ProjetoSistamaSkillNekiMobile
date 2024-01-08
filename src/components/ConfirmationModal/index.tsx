import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
import Button from "../Button";

interface ConfirmationModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Tem certeza que deseja excluir esta skill?
          </Text>
          <Button onPress={onConfirm}>Confirmar</Button>
          <Button onPress={onCancel}>Cancelar</Button>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;