import { Anchor } from "@mantine/core";

interface IProps {
  title: string;
  amount: number;
  children?: any;
}

// Breadcrumps
const links = [
  { title: "Home", href: "/" },
  { title: "Wishlist", href: "/wishlist" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="!text-black !text-xs">
    {item.title}
  </Anchor>
));

export default function index() {
  // const [opened, setOpened] = useState(false);
  // const {
  //   addWishlistItem,
  //   items,
  //   removeWishlistItem,
  //   isWishlistEmpty,
  //   wishlistTotal,
  // } = useWishlist();

  // const budgetWishlist = 50;

  // const form = useForm({
  //   initialValues: {
  //     id: "",
  //     price: 0,
  //     product: "",
  //   },
  // });

  // let total = 0;

  // useEffect(() => {
  //   if (wishlistTotal > budgetWishlist) {
  //     setOpened(true);
  //   }
  // }, [items]);

  // const test = {
  //   id: "hbskjadnl",
  //   price: 5000,
  //   name: "fasfasf",
  // };

  // const onClick = (values: any) => {
  //   form.setFieldValue("id", v4());
  //   addWishlistItem(values);
  // };

  return (
    // <FullWidthLayout>
    //   <section className="space-y-4 px-4 h-screen">
    //     <Breadcrumbs className="mt-4 text">{links}</Breadcrumbs>
    //     <h2 className="text-center font-semibold text-lg text-primary-500">
    //       Wishlist
    //     </h2>
    //     <Card title="budget" amount={budgetWishlist} />
    //     <form onSubmit={form.onSubmit((values) => onClick(values))}>
    //       <div className="grid grid-cols-2 gap-1">
    //         <TextInput
    //           label="Product/Thing"
    //           radius="md"
    //           {...form.getInputProps("product")}
    //         />
    //         <NumberInput
    //           label="Price"
    //           hideControls
    //           radius="md"
    //           icon={<Icon icon="mdi:dollar" />}
    //           {...form.getInputProps("price")}
    //         />
    //         <Button
    //           radius="md"
    //           type="submit"
    //           className="!bg-primary-500 col-span-2"
    //           mt="xs"
    //           // onClick={() => onClick()}
    //         >
    //           ADD
    //         </Button>
    //       </div>
    //     </form>
    //     <ClientOnly>
    //       {!isWishlistEmpty &&
    //         items?.map((item, i) => {
    //           return (
    //             <Card key={i} title={item?.product} amount={item?.price}>
    //               <ActionIcon onClick={() => removeWishlistItem(item?.id)}>
    //                 <Icon
    //                   icon="fluent:delete-48-filled"
    //                   height={16}
    //                   className="text-red-500"
    //                 />
    //               </ActionIcon>
    //             </Card>
    //           );
    //         })}
    //     </ClientOnly>
    //   </section>
    //   <div className="flex items-center justify-between py-2 !bg-primary-500 rounded-t-lg px-6">
    //     <p className="uppercase text-white">Totaal</p>
    //     <span className="text-white font-medium">${wishlistTotal}</span>
    //   </div>
    //   <Modal
    //     opened={opened}
    //     onClose={() => setOpened(false)}
    //     title="Introduce yourself!"
    //   >
    //     {/* Modal content */}
    //   </Modal>
    // </FullWidthLayout>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, iste
      officiis harum sequi, dolorum nisi temporibus et quae accusantium
      repellat, corporis optio eum labore. Tempora dignissimos corporis minima
      excepturi unde?
    </div>
  );
}

function Card({ title, amount, children }: IProps) {
  return (
    <div className="flex justify-between items-center bg-primary-400 py-2 rounded-lg px-6">
      <h3 className="text-neutral-900 uppercase font-medium w-4 flex flex-wrap">
        {title}
      </h3>
      <div className="flex">
        <span className="text-neutral-900 flex-wrap flex">${amount}</span>
        {children}
      </div>
    </div>
  );
}
