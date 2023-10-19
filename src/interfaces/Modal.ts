interface IModalProps {
  isVisible: boolean;
  animationType: 'slide' | 'fade' | 'none';
  onClose?: () => void;
}

export interface ILoginModalProps extends IModalProps {
  onSuccess: () => void;
}

export interface IBookIdEntryModalProps extends IModalProps {
  onConfirm: () => void;
}

export interface IConfirmationModalProps extends IModalProps {
  type: 'borrow' | 'return';
  onConfirm: () => void;
}
