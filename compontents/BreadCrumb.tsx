import { Anchor, Breadcrumbs } from "@mantine/core";
import { useRouter } from "next/router";

export default function BreadCrumb() {
  const router = useRouter();

  const a = router.pathname.replaceAll("/", "");
  const b = a.charAt(0).toUpperCase();
  const c = a.slice(1);
  const currentPage = b.concat(c);

  const links = [
    { title: "Home", href: "/" },
    { title: currentPage, href: router.asPath },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} className="!text-black !text-xs">
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Breadcrumbs>{links}</Breadcrumbs>
    </>
  );
}
