import logo from "../assets/images/logo.jpg";

const Title = ({ children }) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>{children}</h1>
    </header>
  );
};
export default Title;
