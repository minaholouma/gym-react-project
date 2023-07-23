import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobileScreen = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="Home">
      {/* to add blur effect */}
      <div className="blur blur-hero"> </div>{" "}
      <div className="left-h">
        <Navbar />
        {/* the best ad */}{" "}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobileScreen ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>{" "}
          <span> the best fitness club in the town </span>{" "}
        </div>{" "}
        {/* hero heading */}{" "}
        <div className="hero-text">
          <div>
            <span className="stroke-text"> Shape </span> <span> your </span>{" "}
          </div>{" "}
          <div>
            <span> ideal body </span>{" "}
          </div>{" "}
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint
              fugiat nostrum dignissimos dolore, nisi corporis.{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        {/* figuures */}{" "}
        <div className="figures">
          <div>
            <span>
              {" "}
              <NumberCounter start={100} end={140} preFix="+" delay="4" />
            </span>{" "}
            <span> expert coaches </span>{" "}
          </div>{" "}
          <div>
            <span>
              {" "}
              <NumberCounter start={100} end={940} preFix="+" delay="4" />{" "}
            </span>{" "}
            <span> members joined </span>{" "}
          </div>{" "}
          <div>
            <span>
              {" "}
              <NumberCounter start={1} end={30} preFix="+" delay="4" />{" "}
            </span>{" "}
            <span> fitness programs </span>{" "}
          </div>{" "}
        </div>{" "}
        {/*  */}{" "}
        <div className="hero-btns">
          <button className="btn"> get started </button>{" "}
          <button className="btn"> learn more </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="right-h">
        <button className="btn"> join now </button>{" "}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span> heart rate </span> <span> 116 bpm </span>{" "}
        </motion.div>{" "}
        {/*  */} <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />{" "}
        {/*  */}{" "}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span> calories burned </span> <span> 220 kcal </span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
