import React from "react";
import { useState, useEffect } from "react";
import img1 from "../Images/img-9.jpg";
import img2 from "../Images/img-2.jpg";
import img3 from "../Images/img-3.jpg";
import img4 from "../Images/img-4.jpg";
import img5 from "../Images/img-8.jpg";
import { Row, Col } from "react-grid-system";
import Styles from "../CSS/Cards.module.css";

function Cards() {
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setPosition(1);
      else setPosition(0);
      console.log(position);
      setLoading(1);
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  console.log("Rerender");
  return (
    <div className={Styles.Cards}>
      <Row>
        <Col sm={12} style={{ textAlign: "center" }}>
          <h1>Check out these EPIC Destinations!</h1>
        </Col>
      </Row>
      <Row style={{ width: "100%"}}>
        <Col sm={12} md={6}>
          <div
            className={Styles.CardTittle}
            style={{ marginLeft: window.innerWidth < 768 ? "13%" : "22%" }}
          >
            <img src={img1} className={Styles.CardImage} />
            <p>Explore the hidden waterfall deep inside the Amazon Jungle</p>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div
            className={Styles.CardTittle}
            style={{ marginLeft: window.innerWidth < 768 ? "13%" : "0%" }}
          >
            <img src={img2} className={Styles.CardImage} />
            <p>Travel through the Islands of Bali in a Private Cruise</p>
          </div>
        </Col>
      </Row>

      <Row style={{ width: "100%" }}>
        <Col sm={12} md={4}>
          <div
            className={Styles.CardTittle2}
            style={{ marginLeft: window.innerWidth < 768 ? "13%" : "33%" }}
          >
            <img src={img3} className={Styles.CardImage2} />
            <p>Set Sail in the Atlantic Ocean visiting Uncharted Waters</p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div
            className={Styles.CardTittle2}
            style={{ marginLeft: window.innerWidth < 768 ? "13%" : "10%" }}
          >
            <img src={img4} className={Styles.CardImage2} />
            <p>Experience Football on Top of the Himilayan Mountains</p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div
            className={Styles.CardTittle2}
            style={{ marginLeft: window.innerWidth < 768 ? "13%" : "-10%" }}
          >
            <img src={img5} className={Styles.CardImage2} />
            <p>Ride through the Sahara Desert on a guided camel tour</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
