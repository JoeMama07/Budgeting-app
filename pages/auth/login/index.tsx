import { Image } from "@mantine/core";
import Link from "next/link";
import Loginform from "../../../compontents/Loginform";

export default function index() {
  return (
    <section className="bg-primary-500 h-screen px-6 py-12">
      <div className="w-full flex flex-col items-center ">
        <div className="w-24 ml-auto mr-auto">
          <Image src="/BudgetBear.png" alt="logo" />
        </div>
        <div className="rounded-lg border p-4 bg-white ">
          <h1 className="uppercase text-xl text-center py-4 font-bold">
            log in
          </h1>
          <Loginform />
          <p className="mt-4">Don&#39;t have an account yet?</p>
          <div className="text-blue-500 !text-center">
            <Link href="/auth/register">Sign up</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
