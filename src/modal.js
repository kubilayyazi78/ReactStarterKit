import EditTodo from "./modals/edit-todo";
import LoginModal from "./modals/login";
import RegisterModal from "./modals/register";

const modals = [
  {
    name: "edit-todo",
    element: EditTodo,
  },
  { name: "login", element: LoginModal },
  { name: "register", element: RegisterModal }
];

export default modals;
