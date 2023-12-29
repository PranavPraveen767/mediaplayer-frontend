import React from "react";
import { HiVideoCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";
import { MdOutlineFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div style={{ width: "100%", height: "300px", color: "white",overflowY:'hidden' }} className="d-flex justify-content-around p-5 bg-success ">
        <div style={{ fontSize: "30px", width: "500px",height:'277px' }}>
          <HiVideoCamera size={35} className="me-4" />
          Media Player
          <div className="mt-2">
            <p style={{ fontSize: "15px", textAlign: "justify" }}>
              Tired of juggling browser tabs for your YouTube marathon? Say hello to your new haven of uninterrupted viewing. This video player is your ticket to a streamlined, focused experience, built to let you lose yourself in the endless worlds of YouTube. Simply paste your chosen links, one
              after another, and watch them seamlessly unfold before your eyes. No more clicking away, no more searching for the next video – just lean back and let the content flow.
            </p>
          </div>
        </div>
        <div>
          <h1>Links</h1>
          <div className="flex-column">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h5 style={{ color: "white" }}>Landing Page</h5>
            </Link>
            <Link to={"/home"}>
              <h5 style={{ color: "white" }}>Home Page</h5>
            </Link>
            <Link to={"/watch-history"}>
              <h5 style={{ color: "white" }}>Watch History</h5>
            </Link>
          </div>
        </div>
        <div>
          <h1>Guides</h1>
          <div className="flex-column">
            <Link to={"https://react.dev/"}>
              <h5 style={{ color: "white" }}>React</h5>
            </Link>
            <Link to={"https://react-bootstrap.netlify.app/"}>
              {" "}
              <h5 style={{ color: "white" }}>React Bootswatch</h5>
            </Link>
            <Link to={"https://bootswatch.com/"}>
              <h5 style={{ color: "white" }}>Bootswatch</h5>
            </Link>
          </div>
        </div>
        <div>
          <h1>Contact Us</h1>
          <div className="d-flex">
            <input type="text" className="form-control light" placeholder="Enter your E-mail Id" />
            <button className="btn btn-primary ms-3 ">Subscribe</button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <FaInstagram size={25} />
            <TbBrandTwitter size={25} />
            <MdOutlineFacebook size={25} />
            <BsLinkedin size={25} />
          </div>
        </div>
      </div>
      <div className="bg-success d-flex justify-content-center align-items-center" style={{ height: "auto" }}>
        <p style={{ color: "white" }}>Copyright © 2023 Media Player. Built with React</p>
      </div>
    </>
  );
}

export default Footer;
