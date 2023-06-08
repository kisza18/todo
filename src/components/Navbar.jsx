import mainImage from "../assets/images/main.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src={mainImage} alt="logo" />
      <h1>Todo App</h1>
    </nav>
  );
};

export default Navbar;
