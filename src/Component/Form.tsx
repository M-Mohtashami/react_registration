import Input from './Input';
import Button from './Button';
import { useState } from 'react';

interface Props {
  handelValidation: (value: HTMLFormElement) => void;
}

export default function Form({ handelValidation }: Props) {
  const [checkForm, setCheckForm] = useState();
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
        isValid={false}
        icon="mail-outline"
        errorText="email error"
      />
      <Input
        type="text"
        name="userName"
        placeholder="user name"
        isValid={false}
        icon="people-outline"
        errorText="user name is requiered"
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        isValid={false}
        icon="lock-closed-outline"
        errorText="password is not valid"
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="password"
        isValid={false}
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
