import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styles from "../CSS/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div style={{ width: "70%", marginLeft: "15%" }}>
        <div className={styles.description}>
          <Row style={{ color: "white" }}>
            <Col
              sm={12}
              style={{
                fontSize: "1.5rem",
                marginTop: "60px",
              }}
            >
              <p>
                Join the Adventure newsletter to receive our best vacation deals
              </p>
            </Col>
            <Col sm={12}>
              <p className={styles.descriptionP}>
                {" "}
                You can unsubscribe at any time.
              </p>
            </Col>
          </Row>
        </div>
        <form className={styles.form}>
          <input
            className={styles.footerInput}
            type="text"
            placeholder="Your Email"
          />
          <button className={styles.footerButton}>Subscribe</button>
        </form>
        <div className={styles.lnks}>
          <Row>
            <Col sm={6} md={3}>
              <h2>About Us</h2>
              <a href="#">How it works</a>
              <a href="#">Testimonials</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
              <a href="#">Terms of Service</a>
            </Col>
            <Col sm={6} md={3}>
              <h2>Contact Us</h2>
              <a href="">Contact</a>
              <a href="">Support</a>
              <a href="">Destinations</a>
              <a href="">Sponsorships</a>
            </Col>
            <Col sm={6} md={3}>
              {" "}
              <h2>Videos</h2>
              <a href="">Submit Video</a>
              <a href="">Ambassadors</a>
              <a href="">Agency</a>
              <a href="">Influencer</a>
            </Col>
            <Col sm={6} md={3}>
              <h2>Social Media</h2>
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">Youtube</a>
              <a href="">Twitter</a>
            </Col>
          </Row>
        </div>
        <div className={styles.Icons}>
          <Row style={{ color: "white" }}>
            <Col sm={12} md={4}>
              <h2>
                TRVL <i className="fab fa-typo3" />{" "}
              </h2>
            </Col>
            <Col sm={12} md={4}>
              <p>TRVL @ 2022</p>
            </Col>
            <Col sm={12} md={4} style={{ marginTop: "20px" }}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram" style={{ marginLeft: "20px" }}>
                {" "}
              </i>
              <i className="fab fa-youtube" style={{ marginLeft: "20px" }}>
                {" "}
              </i>
              <i className="fab fa-twitter" style={{ marginLeft: "20px" }}>
                {" "}
              </i>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
