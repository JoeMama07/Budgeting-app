import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext } from "react";

// interface IUser {
//   firstname: string;
// }

// interface ITest {
//   user: IUser;
//   user1: {
//     firstname: string;
//   } | null;
// }

interface IContext {
  budget: number;
  setBudget?: React.Dispatch<React.SetStateAction<number>>;

  wishlistBudget: number;
  setWishlistBudget?: React.Dispatch<React.SetStateAction<number>>;
}

export const BudgetContext = createContext<IContext>({
  budget: 0,
  wishlistBudget: 0,
});

export const BudgetProvider = ({ children }: any) => {
  const [budget, setBudget] = useLocalStorage({
    key: "budget",
    defaultValue: 0,
  });
  const [wishlistBudget, setWishlistBudget] = useLocalStorage({
    key: "wishlistBudget",
    defaultValue: 0,
  });

  return (
    <BudgetContext.Provider
      value={{ budget, setBudget, setWishlistBudget, wishlistBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
