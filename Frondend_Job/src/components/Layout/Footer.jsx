import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Ajay Verma.</div>
      <div>
        
        
        <Link to={"https://www.linkedin.com/in/ajay-verma-508603244"} target="_blank">
          <FaLinkedin />
        </Link>
      
      </div>
    </footer>
  );
};

export default Footer;
