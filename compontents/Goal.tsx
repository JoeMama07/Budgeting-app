import { Modal } from "@mantine/core";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";

export default function Goal() {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className="bg-primary-300 rounded-md p-4 flex flex-col gap-4 hover:cursor-pointer"
      onClick={() => setOpened(!opened)}
    >
      <Modal opened={opened} onClose={() => setOpened(false)}>
        {/* Modal content */}
      </Modal>

      <p className="font-bold">Car</p>

      <ProgressBar
        completed={50}
        height="15px"
        bgColor="#FECF4E"
        labelColor="#00000"
      />

      <p className="font-medium">$5700 / $10000</p>
    </div>
  );
}
