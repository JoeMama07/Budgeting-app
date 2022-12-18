import { createContext, useContext, useState } from "react";

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
  budget?: number;
  setBudget?: React.Dispatch<React.SetStateAction<number>>;

  wishlistBudget: number;
  setWishlistBudget?: React.Dispatch<React.SetStateAction<number>>;
}

export const BudgetContext = createContext<IContext>({
  budget: 0,
  wishlistBudget: 0,
});

export const BudgetProvider = ({ children }: any) => {
  const [budget, setBudget] = useState(1000);
  const [wishlistBudget, setWishlistBudget] = useState(1000);
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
