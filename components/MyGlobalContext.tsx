import { createContext, useContext } from "react";
export type GlobalContent = {
  copy: string;
  setCopy: (c: string) => void;
};

var copy: string = "!";

export const MyGlobalContext = createContext<GlobalContent>({
  copy,
  setCopy: (value: string) => {
    copy = value;
  },
});

export const useGlobalContext = () => useContext(MyGlobalContext);
