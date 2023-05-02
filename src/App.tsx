import { useState } from 'react';
import Button from './Component/Button';
import Form from './Component/Form';

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handelActivation = (active: boolean) => {
    active ? setIsActive(isActive) : setIsActive(!isActive);
  };
  return (
    <div className="w-full h-full bg-pink-300 flex items-center justify-center">
      <div className="bg-white max-w-sm w-[95%] p-6 flex flex-col gap-8 items-center justify-start rounded-md bg-opacity-60">
        <div className="flex items-center justify-center">
          <Button
            text="Sign in"
            isActive={isActive}
            handelActivation={handelActivation}
          />
          <Button
            text="Sign up"
            isActive={!isActive}
            handelActivation={handelActivation}
          />
        </div>
        {isActive ? null : <Form />}
      </div>
    </div>
  );
}

export default App;
