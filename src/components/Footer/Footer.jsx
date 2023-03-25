import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
import { Link, Navigate } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div className="navLeft img">
        <Link to="/home">
          <img src="/asset/logo.png"/> 
        </Link>
        </div>
        <p className="desc">
          XTYLES is a global online retail company that delivers products
          directly to consumers. Founded in 2018, XTYLES has offered customers a
          convenient way to shop for a wide selection of lifestyle products at
          attractive prices through www.xtyles.in, and other websites, The
          application has been built in Framwork using React Js, Express, Mondo
          DB and Node js
        </p>

        <div className="social_content">
          <div className="socialIcon">
            <Facebook className="facebook" />
          </div>
          <div className="socialIcon">
            <Instagram className="insta" />
          </div>
          <div className="socialIcon">
            <Twitter className="twitter" />
          </div>
          <div className="socialIcon">
           <YouTube className="youtube"/>
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h3 className="footer_title">Useful Links</h3>
        <ul className="footer_listitem_ul">
          <li className="footer_listitem_li">
            <Link className="link" to="/about">
              {" "}
              About{" "}
            </Link>{" "}
          </li>
          <li className="footer_listitem_li">
            <Link className="link" to="/cart">
              {" "}
              Cart
            </Link>
          </li>
          <li className="footer_listitem_li">
            <Link className="link" to="/men fashion">
              {" "}
              Men Fashion
            </Link>
          </li>
          <li className="footer_listitem_li">
            <Link className="link" to="/women fashion">
              {" "}
              Women Fashion
            </Link>
          </li>
         
          <li className="footer_listitem_li">
            <Link className="link" to="/myAccouny">
              {" "}
              My Account
            </Link>
          </li>
          <li className="footer_listitem_li">
            <Link className="link" to="/order tracking">
              {" "}
              Order Tracking
            </Link>
          </li>
          
          <li className="footer_listitem_li">
            <Link className="link" to="/terms">
              {" "}
              Terms
            </Link>
          </li>

          <li className="footer_listitem_li">
            <Link className="link" to="/privacy&policy">
              {" "}
              Privacy & Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer_right">
        <h3 className="contact_title">Contact</h3>
        <div className="contact_item">
          <Room className="room" /> Rishi Road, Kalimpong West Bengal Pin:734301
        </div>
        <div className="contact_item">
          {" "}
          <Phone className="room" />
          9867969377
        </div>
        <div className="contact_item">
          <MailOutline className="room" /> <a href="/" className="mail_office">support@xtyles.in </a> _/_<a href="#" className="mail_office">sales@xtyles.in </a>{" "}
        </div>
        <img className="payment" src="asset/card.jpg" />
      </div>
    </div>
  );
};

export default Footer;
