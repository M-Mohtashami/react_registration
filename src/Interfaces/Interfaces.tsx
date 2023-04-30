interface FormItemType {
  isValid: boolean;
  inputValue: string;
}
interface FormType {
  email: FormItemType;
  userName: FormItemType;
  password: FormItemType;
  confirmPassword: FormItemType;
}
