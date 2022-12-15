import { Icon } from "@iconify/react";
import Link from "next/link";
import FullWidthLayout from "../layouts/FullWidthLayout";
interface IProps {
  children?: any;
}

export default function Home() {
  const links = [
    { text: "Budget", icon: "mdi:clipboard-list", href: "/budget" },
    { text: "Wishlist", icon: "mdi:book-heart", href: "/wishlist" },
    { text: "School", icon: "mdi:school", href: "/school" },
    { text: "Goals", icon: "material-symbols:directions-car", href: "/goals" },
    {
      text: "Payments",
      icon: "icon-park-solid:flash-payment",
      href: "/payments",
    },
    {
      text: "Insights",
      icon: "mdi:graph-areaspline-variant",
      href: "/insights",
    },
  ];
  return (
    <FullWidthLayout>
      <section className="p-6 pb-12">
        <h1 className="text-xl font-bold">Hi, Tedd</h1>
        <p className="text-neutral-300 text-sm">Ready to budget your life?</p>
        <div className="grid grid-cols-2 mt-4 gap-4">
          {links.map(({ icon, text, href }, i) => (
            <div
              className="bg-primary-300 rounded-xl hover:scale-90 duration-150 ease-linear"
              key={i}
            >
              <Link
                href={href}
                className="flex flex-col items-center justify-center py-10"
              >
                <Icon icon={icon} height={24} />
                <span>{text}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </FullWidthLayout>
  );
}

function CardLink({ children }: IProps) {
  return <div className="bg-primary-300 rounded-lg px-4 py-6">{children}</div>;
}
