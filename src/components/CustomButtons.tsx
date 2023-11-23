import React from "react";

type CustomButtonProps = {
  current: number;
  id: number;
};

export default function CustomButton({ current, id }: CustomButtonProps) {
  return (
    <button
      className={`w-2 h-2 bg-sky-100 rounded-full cursor-pointer border border-solid ${
        current === id ? "border-sky-900" : "border-sky-100"
      }`}
    ></button>
  );
}
