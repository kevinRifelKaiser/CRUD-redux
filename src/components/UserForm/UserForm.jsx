import { Card, Title, TextInput, Button } from "@tremor/react";
import useUserActions from "../../hooks/useUserActions";

const UserForm = ({ title }) => {
  const { onHandleCreate } = useUserActions();

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");

    onHandleCreate({ name, email });

    form.reset();
  };

  return (
    <>
      <Card style={{ marginTop: "20px" }}>
        <Title>{title}</Title>
        <form onSubmit={onHandleSubmit}>
          <TextInput name="name" placeholder="Your name" />
          <TextInput name="email" placeholder="Your email" />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
