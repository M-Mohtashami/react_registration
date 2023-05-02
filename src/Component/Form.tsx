import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { FormType, InputType } from '../Interfaces/Interfaces';
import emailValisation from '../utils/emailValisation';
import userNameValidation from '../utils/userNameValidation';
import passwordValisation from '../utils/passwordValidation';
import confirmPassword from '../utils/confirmPassword';

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

export default function Form() {
  const [checkForm, setCheckForm] = useState<FormType>(initForm);
  const [validForm, setValidForm] = useState(false);
  const handelInput = ({ key, value }: InputType) => {
    let validation = true;
    console.log(key, value);
    switch (key) {
      case 'email':
        validation = emailValisation(value);

        break;

      case 'userName':
        validation = userNameValidation(value);
        break;
      case 'password':
        validation = passwordValisation(value);
        break;
      case 'confirmPassword':
        validation = confirmPassword(checkForm.password.inputValue, value);
        break;
    }
    setCheckForm((prev) => {
      return {
        ...prev,
        [key]: {
          isValid: validation,
          inputValue: value,
        },
      };
    });
  };
  const handelForm = () => {
    setCheckForm((prev) => {
      return {
        email: {
          isValid: emailValisation(prev.email.inputValue),
          inputValue: prev.email.inputValue,
        },
        userName: {
          isValid: userNameValidation(prev.userName.inputValue),
          inputValue: prev.userName.inputValue,
        },
        password: {
          isValid: passwordValisation(prev.password.inputValue),
          inputValue: prev.password.inputValue,
        },
        confirmPassword: {
          isValid: confirmPassword(
            prev.password.inputValue,
            prev.confirmPassword.inputValue
          ),
          inputValue: prev.confirmPassword.inputValue,
        },
      };
    });
    const valid: boolean =
      checkForm.email.isValid &&
      checkForm.password.isValid &&
      checkForm.userName.isValid &&
      checkForm.confirmPassword.isValid;

    setValidForm(valid);
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handelForm();
        console.log(validForm);

        validForm
          ? console.log(Object.fromEntries(new FormData(e.currentTarget)))
          : console.log('form is not valid');
      }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={checkForm.email.inputValue}
        isValid={checkForm.email.isValid}
        icon="mail-outline"
        errorText="email is not valid"
        handelInput={handelInput}
      />
      <Input
        type="text"
        name="userName"
        placeholder="user name"
        value={checkForm.userName.inputValue}
        isValid={checkForm.userName.isValid}
        icon="people-outline"
        errorText="user name is requiered"
        handelInput={handelInput}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        value={checkForm.password.inputValue}
        isValid={checkForm.password.isValid}
        icon="lock-closed-outline"
        errorText="password is not valid"
        handelInput={handelInput}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="password"
        value={checkForm.confirmPassword.inputValue}
        isValid={checkForm.confirmPassword.isValid}
        icon="checkmark-circle-outline"
        errorText="confirm password is not mached"
        handelInput={handelInput}
      />
      <Button text="Sign up" isActive={true} />
    </form>
  );
}
