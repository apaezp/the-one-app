import React from "react";
import "./FooterGot.css";

function FooterGot() {
  return (
    <div clasName="footerGot-container">
      <section className="footerGot-quote">
        <p className="footerGot-quote-text">
          "TheOne is the best way to discover new things."
        </p>
        <p className="footerGot-quote-author">- George R.R. Martin</p>
      </section>

      <div className="footerGot-rights">
        <p>© 2022 TheOne. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterGot;
