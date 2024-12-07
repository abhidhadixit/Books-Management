import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <h4>
           by{" "}
          <a
            style={{
              textDecoration: "underline",
              color: "white",
            }}
            href="https://github.com/abhidhadixit.io"
            target="_blank"
            rel="noreferrer"
          >
            Abhidha Dixit
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
