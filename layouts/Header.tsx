import { Icon } from "@iconify/react";
import { Burger, Button, Drawer, Image } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [opened, setOpened] = useState(false);

  const drawerLinks = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Account",
      href: "/account",
    },
  ];

  return (
    <>
      <section className="bg-primary-500 flex px-6 justify-between items-center h-20 rounded-b-lg">
        <Link href="/">
          <div className="w-14 hover:scale-95 ease-in-out duration-150">
            <Image src="/BudgetBear.png" alt="logo" />
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="./profile">
            <Icon
              icon="bi:person-fill"
              className="text-white hover:scale-95 ease-linear duration-150"
              height={30}
            />
          </Link>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            color="#ffff"
          />
        </div>
      </section>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="xl"
        size="sm"
        position="right"
        classNames={{
          drawer: "rounded-r-lg !bg-primary-300",
          title: "uppercase font-bold !text-lg",
        }}
      >
        <div className="h-full">
          {drawerLinks.map(({ text, href }, i) => (
            <div className="flex flex-col items-center mt-10" key={i}>
              <Link href={href} legacyBehavior>
                <a className="text-lg font-semibold hover:scale-90 duration-300 ease-in-out">
                  {text}
                </a>
              </Link>
            </div>
          ))}
          <Button>Logout</Button>
        </div>
      </Drawer>
    </>
  );
}
