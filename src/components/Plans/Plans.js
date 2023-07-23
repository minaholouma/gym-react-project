import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plans-blurL"></div>
      <div className="blur plans-blurR"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* .... */}
      <div className="plans">
        {plansData.map((plan, idx) => (
          <div className="plan" key={idx}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, idx) => (
                <div className="feature" key={idx}>
                  <img src={whiteTick} alt="" />
                  <span key={idx}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
