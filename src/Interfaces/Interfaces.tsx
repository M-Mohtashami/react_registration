interface FormItemType {
  isValid: boolean;
  inputValue: string;
}
export interface FormType {
  email: FormItemType;
  userName: FormItemType;
  password: FormItemType;
  confirmPassword: FormItemType;
}
