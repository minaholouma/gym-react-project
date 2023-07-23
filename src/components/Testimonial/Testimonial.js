import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonial" id="Testimonial">
      {" "}
      <div className="left-t">
        <span> TESTIMONIALS </span>{" "}
        <span className="stroke-text"> WHAT THEY </span>{" "}
        <span> SAY ABOUT US </span>{" "}
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          exit={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        >
          {testimonialsData[selected].review}{" "}
        </motion.span>{" "}
        <span>
          <span style={{ color: "var(--orange)" }}>
            {" "}
            {testimonialsData[selected].name}{" "}
          </span>{" "}
          -{testimonialsData[selected].status}{" "}
        </span>{" "}
      </div>{" "}
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          exit={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          {" "}
          {/* if i have 3 objs so tLengh=3 on selected is the first go to index 2 (the last one coz 0indexing)else go to prev one */}{" "}
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />{" "}
          {/* if i'm in the last one go to first else go to next */}{" "}
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Testimonial;
