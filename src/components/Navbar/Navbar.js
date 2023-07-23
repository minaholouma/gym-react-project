import "./Navbar.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const mobileScreen = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="Navbar">
      <img src={Logo} alt="" className="logo" />{" "}
      {menuOpened === false && mobileScreen === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            borderRadius: "5px",
            padding: ".5rem",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />{" "}
        </div>
      ) : (
        <ul className="Navbar-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              //make to first link only
              //   activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
            >
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to="praograms"
              spy={true}
              smooth={true}
            >
              Programs{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Reasons"
              spy={true}
              smooth={true}
            >
              Why Us{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to="Plans"
              spy={true}
              smooth={true}
            >
              Plans{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonial"
              spy={true}
              smooth={true}
            >
              Testimonials{" "}
            </Link>{" "}
          </li>{" "}
        </ul>
      )}{" "}
    </div>
  );
};

export default Navbar;
