import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Registerform() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <div className="space-y-4">
        <TextInput
          autoComplete="off"
          radius="md"
          label="Firstname"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          autoComplete="off"
          radius="md"
          label="Lastname"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          radius="md"
          autoComplete="off"
          label="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          autoComplete="off"
          radius="md"
          label="Password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          autoComplete="off"
          radius="md"
          label="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
        <Group position="center" mt="md">
          <Button type="submit" radius="md" variant="outline">
            Sign Up
          </Button>
        </Group>
      </div>
    </form>
  );
}
