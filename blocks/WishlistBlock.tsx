import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  clsx,
  Modal,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useWishlist } from "react-use-wishlist";
import BreadCrumb from "../compontents/BreadCrumb";
import OnMount from "../compontents/UnMount";
import { useBudget } from "../context/budgetContext";

export default function WishlistBlock() {
  const { wishlistBudget } = useBudget();
  const { addWishlistItem, items, wishlistTotal } = useWishlist();
  const [opened, setOpened] = useState(false);
  const [overBudget, setOverBudget] = useState(false);

  const form = useForm({
    initialValues: {
      id: randomId(),
      price: null ?? 0,
      item: "",
    },
  });

  const addId = () => {
    form.setFieldValue("id", randomId());
  };

  const addToWishlist = () => {
    addId();
    form.setValues({
      item: form.values.item,
      price: form.values.price,
    });

    addWishlistItem(form.values);
    showNotification({
      message: "Item added to wishlist",
      color: "green",
    });
  };

  useEffect(() => {
    if (wishlistTotal > wishlistBudget) {
      setOpened(true);
      setOverBudget(!overBudget);
    } else {
      setOverBudget(false);
    }
  }, [wishlistTotal]);

  return (
    <section className="h-[calc(100vh_-_80px)] flex flex-col justify-between">
      <div className="p-6 pb-12 space-y-4">
        <BreadCrumb />
        <div className="uppercase bg-primary-400 font-medium rounded-lg flex justify-between py-2 px-4">
          <p>budget</p>
          <p>${wishlistBudget}</p>
        </div>

        <form onSubmit={form.onSubmit(() => addToWishlist())}>
          <div className="flex gap-4 items-center">
            <TextInput
              autoComplete="off"
              radius="md"
              placeholder="Iphone 14 pro max"
              classNames={{
                root: "!flex-1",
                input: "border-none bg-primary-300",
              }}
              {...form.getInputProps("item")}
            />
            <div className="flex items-center gap-4">
              <NumberInput
                autoComplete="off"
                radius="md"
                hideControls
                placeholder="2000"
                icon={<Icon icon="bi:currency-dollar" />}
                classNames={{
                  root: "!w-24",
                  input: "!border-none bg-primary-300",
                }}
                {...form.getInputProps("price")}
              />
              <Button
                type="submit"
                radius="md"
                classNames={{ root: "!bg-primary-300" }}
              >
                <Icon icon="fluent:add-24-filled" className="text-black" />
              </Button>
            </div>
          </div>
        </form>

        <div>
          <span className="text-neutral-300">Whislist</span>
          <div className="space-y-4">
            <OnMount>
              {items.map((item, i) => (
                <Card data={item} key={i} />
              ))}
            </OnMount>
          </div>
        </div>

        <Modal
          radius={"md"}
          opened={opened}
          onClose={() => setOpened(false)}
          title="Are you sure you need that ?!"
          classNames={{
            close: "!hidden",
            title:
              "!ml-auto !mr-auto w-full flex justify-center text-base font-medium",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <p className="text-neutral-500">Please think about your budget</p>
            <div className="flex items-center gap-4 mt-4">
              <Button
                variant="outline"
                className="!border-primary-500 text-neutral-900 hover:bg-transparent hover:scale-95 duration-150 ease-in-out"
                onClick={() => setOpened(false)}
              >
                No, Cancel
              </Button>
              <Button
                variant="filled"
                className="!bg-primary-500 text-white hover:scale-95 ease-in-out duration-150"
                onClick={() => setOpened(false)}
              >
                Yes, Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </div>

      <div
        className={clsx(
          "flex items-center justify-between bg-primary-500 p-6 text-white font-bold rounded-t-lg",
          {
            "text-red-500": overBudget,
          }
        )}
      >
        <span className="font-medium !text-white">Total</span>
        <span className="font-medium">${wishlistTotal}</span>
      </div>
    </section>
  );
}

function Card({ data }: any) {
  const { removeWishlistItem } = useWishlist();

  const removeItem = () => {
    removeWishlistItem(data?.id);
    showNotification({
      message: "Item removed from wishlist",
      color: "red",
    });
  };

  return (
    <div className="flex justify-between gap-4 bg-primary-400 rounded-lg px-4 py-2">
      <span>{data?.item}</span>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span>$</span>
          <span>{data?.price}</span>
        </div>
        <ActionIcon
          className="group hover:bg-red-500"
          onClick={() => removeItem()}
        >
          <Icon
            icon="fluent:delete-24-regular"
            className="text-red-500 group-hover:text-white"
          />
        </ActionIcon>
      </div>
    </div>
  );
}
