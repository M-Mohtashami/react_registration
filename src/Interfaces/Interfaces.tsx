interface FormItemType {
  isValid: boolean;
  inputValue: string;
}
type Key = keyof FormType;
export interface FormType {
  email: FormItemType;
  userName: FormItemType;
  password: FormItemType;
  confirmPassword: FormItemType;
}

export interface InputType {
  key: Key | string;
  value: string;
  // checkValidity: (val: string) => boolean;
}
