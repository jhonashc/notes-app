type BaseField = {
  label: string;
  name: string;
  placeholder?: string;
};

type TypeField = {
  type: string;
};

export type BaseFieldProps = BaseField & TypeField;

export type PasswordTextFieldProps = BaseField;
