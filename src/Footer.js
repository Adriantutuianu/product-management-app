import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p>@{new Date().getFullYear()} - All rights reserved. </p>{" "}
      {/* Outputs 2020 */}
    </footer>
  );
}

export default Footer;
