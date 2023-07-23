import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-footer">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-footerR"></div>
      <div className="blur blur-footerL"></div>
    </div>
  );
};

export default Footer;
