import { Icon } from "@iconify/react";
import { Anchor, Breadcrumbs, NumberInput, Select } from "@mantine/core";
import { useState } from "react";
import FullWidthLayout from "../../layouts/FullWidthLayout";

const items = [
  { title: "Home", href: "/" },
  { title: "Schools", href: "/schools" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="!text-black !text-xs">
    {item.title}
  </Anchor>
));

export default function SchoolPage() {
  const [value, setValue] = useState<null | string>(null);

  const schools = [
    { label: "UNASAT", value: "unasat" },
    { label: "NATIN", value: "natin" },
    { label: "PTC", value: "PTC" },
  ];

  return (
    <FullWidthLayout>
      <section className="space-y-4 px-4">
        <Breadcrumbs className="mt-4 text">{items}</Breadcrumbs>
        <Select
          onChange={setValue}
          value={value}
          data={schools}
          label="Choose your school"
          radius={"md"}
        />
        {value === "natin" && <Natin />}
      </section>
    </FullWidthLayout>
  );
}

function Natin() {
  const headers = ["Schooljaar", "Uniform", "Vervoer", "Zakgeld"];

  return (
    <div className="rounded-lg bg-primary-300 p-4">
      <div className="flex flex-col h-full justify-between">
        {headers.map((item, i) => (
          <div className="flex items-center justify-between" key={i}>
            <p className="text-sm">{item}</p>
            <NumberInput
              icon={<Icon icon="mdi:dollar" />}
              placeholder="..."
              classNames={{
                root: "!w-24",
                input: "!border-0 bg-primary-300 !text-center",
              }}
              hideControls
            />
          </div>
        ))}
        <div className="bg-neutral-900 w-full h-[2px] mt-40"></div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Totaal</p>
          <NumberInput
            icon={<Icon icon="mdi:dollar" />}
            placeholder="..."
            classNames={{
              root: "!w-24",
              input: "!border-0 bg-primary-300 !text-center",
            }}
            hideControls
          />
        </div>
      </div>
    </div>
  );
}
