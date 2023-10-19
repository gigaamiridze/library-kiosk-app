interface IModalProps {
  isVisible: boolean;
  animationType: 'slide' | 'fade' | 'none';
  onClose: () => void;
}

export interface ILoginModalProps extends IModalProps {
  onSuccess: () => void;
}
