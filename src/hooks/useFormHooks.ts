import { useState } from "react";

interface FormState {
  email: string;
  password: string;
}

export const useFormHooks = ({ email, password }: FormState) => {
  const [formState, setFormsState] = useState({ email, password });

  return {
    formState,
    setFormsState,
  };
};
