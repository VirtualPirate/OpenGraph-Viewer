import { createContext, useState, ReactNode } from "react";

export type ButtonStateType = {
  buttonDisableState: boolean;
  setButtonDisableState: (arg: boolean) => void;
};

export const ButtonStateContext = createContext<ButtonStateType>({
  buttonDisableState: false,
  setButtonDisableState: (arg: boolean) => {},
});

type ButtonStateContextProviderType = {
  children: ReactNode;
};

export const ButtonStateContextProvider = ({
  children,
}: ButtonStateContextProviderType) => {
  const [buttonDisableState, setButtonDisableState] = useState<boolean>(false);
  return (
    <ButtonStateContext.Provider
      value={{ buttonDisableState, setButtonDisableState }}
    >
      {children}
    </ButtonStateContext.Provider>
  );
};
