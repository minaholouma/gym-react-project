import { useRef } from "react";
import "./mail.css";
import emailjs from "@emailjs/browser";

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oevzatd",
        "template_p9e39sr",
        form.current,
        "cZfSjeQyeTskT5NZs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="email-container"
        >
          <input
            type="email"
            name="user_email"
            placeholder="enter your email here"
          />
          <button className="btn btn-join">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
