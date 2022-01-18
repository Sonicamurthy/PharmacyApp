import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a
        className="mailBtn"
        href="mailto:ganeshswamy1531999@gmail.com@gmail.com"
      >
        <Button>Contact for queries: sonikatallam100@gmail.com </Button>
      </a>
    </div>
  );
};

export default Contact;
