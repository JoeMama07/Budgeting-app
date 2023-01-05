import BreadCrumb from "../compontents/BreadCrumb";
import Goal from "../compontents/Goal";

export default function GoalsBlock() {
  return (
    <section className="p-6 pb-12 space-y-4">
      <BreadCrumb />
      <h2 className="text-xl font-bold">Current Goals</h2>

      <Goal />
    </section>
  );
}
