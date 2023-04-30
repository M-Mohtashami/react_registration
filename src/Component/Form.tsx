import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { FormType } from '../Interfaces/Interfaces';

interface Props {
  handelValidation: (value: HTMLFormElement) => void;
}
const initForm: FormType = {
  email: {
    isValid: true,
    inputValue: '',
  },
  userName: {
    isValid: true,
    inputValue: '',
  },
  password: {
    isValid: true,
    inputValue: '',
  },
  confirmPassword: {
    isValid: true,
    inputValue: '',
  },
};

export default function Form({ handelValidation }: Props) {
  const [checkForm, setCheckForm] = useState<FormType>(initForm);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
      }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={checkForm.email.inputValue}
        isValid={checkForm.email.isValid}
        icon="mail-outline"
        errorText="email error"
      />
      <Input
        type="text"
        name="userName"
        placeholder="user name"
        value={checkForm.userName.inputValue}
        isValid={checkForm.userName.isValid}
        icon="people-outline"
        errorText="user name is requiered"
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        value={checkForm.password.inputValue}
        isValid={checkForm.password.isValid}
        icon="lock-closed-outline"
        errorText="password is not valid"
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="password"
        value={checkForm.confirmPassword.inputValue}
        isValid={checkForm.confirmPassword.isValid}
        icon="checkmark-circle-outline"
        errorText="confirm password is not mached"
      />
      <Button
        text="Sign up"
        isActive={true}
        handelAcivation={(v: boolean) => {
          console.log(v);
        }}
      />
    </form>
  );
}
