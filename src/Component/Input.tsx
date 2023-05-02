import IonIcon from '@reacticons/ionicons';
import { FormEvent, useState } from 'react';
import { InputType } from '../Interfaces/Interfaces';
interface Props {
  type: string;
  name: string;
  placeholder: string;
  icon:
    | 'mail-outline'
    | 'people-outline'
    | 'lock-closed-outline'
    | 'checkmark-circle-outline';
  errorText: string;
  value: string;
  isValid: boolean;
  handelInput: (val: InputType) => void;
}
export default function Input({
  type,
  name,
  placeholder,
  icon,
  errorText,
  value,
  isValid,
  handelInput,
}: Props) {
  // const [isValid, setIsValid] = useState<boolean>(true);
  return (
    <div className="flex flex-col items-start gap-1">
      <div
        className={`bg-white p-2 rounded-md flex flex-row-reverse items-center justify-center gap-2  ${
          isValid ? '' : 'border-2 border-red-500'
        }`}
      >
        <input
          type={type}
          name={name}
          // value={value}
          placeholder={placeholder}
          className={`focus:outline-none`}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            // console.log(name, value);
            handelInput({ key: name, value: e.target.value });
          }}
        />
        <IonIcon
          name={icon}
          className={isValid ? 'text-gray-500' : 'text-red-600'}
        />
      </div>
      {!isValid && <p className="text-red-600 pl-3">{errorText}</p>}
    </div>
  );
}
