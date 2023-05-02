import React from 'react';

interface Props {
  text: string;
  isActive: boolean;
  handelActivation?: (value: boolean) => void;
}
export default function Button({ text, isActive, handelActivation }: Props) {
  let classes: string;
  isActive
    ? (classes =
        'w-full bg-purple-700 rounded-md text-slate-100 px-6 py-2 text-center')
    : (classes = 'text-purple-700 px-4 py-1 text-center');
  return (
    <div>
      <button className={classes} onClick={() => handelActivation!(isActive)}>
        {text}
      </button>
    </div>
  );
}
