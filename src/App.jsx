import "./App.css";
import { CardList, UserForm } from "./components/index";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors />
      <CardList />
      <UserForm title={"Add a new user"} />
    </>
  );
}

export default App;
