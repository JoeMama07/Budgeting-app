import { Icon } from "@iconify/react";
import { Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import BreadCrumb from "../compontents/BreadCrumb";
import { useBudget } from "../context/budgetContext";

export default function BudgetBlock() {
  const { budget, wishlistBudget } = useBudget();

  const data = [
    {
      icon: "mdi:clipboard-list",
      text: "Budget",
      amount: budget,
    },
    {
      icon: "mdi:book-heart",
      text: "Wishlist Budget",
      amount: wishlistBudget,
    },
  ];

  return (
    <section className="p-6 pb-12 space-y-4">
      <BreadCrumb />
      <Budgetsform />
      <div className="flex flex-col gap-4 pt-4 border rounded-lg p-4 shadow-md">
        <h2 className="font-bold text-center">You&#39;re current budgets</h2>
        {data.map(({ icon, text, amount }, i) => (
          <div
            className="rounded-lg bg-primary-300 flex justify-between items-center px-4 py-2"
            key={i}
          >
            <div className="flex items-center gap-1">
              <Icon icon={icon} height={16} />
              <span>{text}</span>
            </div>
            <div className="flex items-center">
              <Icon icon="bi:currency-dollar" />
              <span className="font-bold">{amount}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Budgetsform() {
  const { setBudget, setWishlistBudget, budget, wishlistBudget } = useBudget();

  const form = useForm({
    initialValues: {
      budget: budget ?? 0,
      wishlistBudget: wishlistBudget ?? 0,
    },
  });

  const handleSubmit = () => {
    setBudget?.(form.values.budget);
    setWishlistBudget?.(form.values.wishlistBudget);
    showNotification({
      message: "Budget updated",
      color: "green",
    });
  };
  return (
    <div className="rounded-lg  border-lg shadow-md p-4 bg-">
      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <div className="flex flex-col gap-4">
          <NumberInput
            autoComplete="off"
            hideControls
            radius="md"
            label="Insert here your budget"
            icon={<Icon icon="bi:currency-dollar" />}
            classNames={{
              input: "bg-primary-300 border-none",
              label: "text-neutral-900",
            }}
            {...form.getInputProps("budget")}
          />
          <NumberInput
            autoComplete="off"
            hideControls
            radius="md"
            label="Insert here your budget for your wishlist"
            icon={<Icon icon="bi:currency-dollar" />}
            classNames={{
              input: "bg-primary-300 border-none",
              label: "text-neutral-900",
            }}
            {...form.getInputProps("wishlistBudget")}
          />
          <Button
            type="submit"
            classNames={{
              root: "w-fit self-end bg-primary-500 hover:bg-primary-500",
            }}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
