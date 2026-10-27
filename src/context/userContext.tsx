
import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from "react";

import { food_items } from "../food";

export type FoodItem = (typeof food_items)[number];

type ContextType = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  categ: FoodItem[];
  setCateg: Dispatch<SetStateAction<FoodItem[]>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
};

export const dataContext = createContext<ContextType | null>(null);

export default function UserContext({
  children
}: {
  children: ReactNode;
}) {

  const [input, setInput] = useState("");
  const [categ, setCateg] = useState<FoodItem[]>(food_items);
  const [showCart, setShowCart] = useState(false);

  return (
    <dataContext.Provider
      value={{
        input,
        setInput,
        categ,
        setCateg,
        showCart,
        setShowCart
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
