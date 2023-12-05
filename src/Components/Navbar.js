import  Group  from "../Assets/Group.png";

const Navbar = () => {
  
  return (
    <nav>
      <div className="nav-logo-container">
      <img src={Group} alt="" className="nav-logo-img"/>
        <h2 className="nav-logo-heading">Jalsamadhan</h2>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Login</a>
        <a href="">SignUp</a>

      </div>
    </nav>
  );
};

export default Navbar;
