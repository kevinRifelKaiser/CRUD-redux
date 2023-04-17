import "./App.css";
import { CardList, UserForm } from "./components/index";

function App() {
  return (
    <>
      <CardList />
      <UserForm title={"Add a new user"} />
    </>
  );
}

export default App;
