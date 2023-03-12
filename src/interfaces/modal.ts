type BaseConfirmModalProps = {
  handleDeleteItem: (isDeleted: boolean) => void;
};

export type ModalWrapperProps = {
  children: JSX.Element | JSX.Element[];
};

export type BaseModalProps = {
  visible: boolean;
  handleVisible: (visible: boolean) => void;
};

export type ConfirmModalProps = BaseModalProps & BaseConfirmModalProps;
