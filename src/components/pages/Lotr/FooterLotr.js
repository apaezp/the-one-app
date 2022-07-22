import React from 'react'
import "./FooterLotr.css";

function FooterLotr() {
  return (
    <div clasName="footerLotr-container">
      <section className="footerLotr-quote">
        <p className="footerLotr-quote-text">
          "TheOne is the best way to discover new things."
        </p>
        <p className="footerLotr-quote-author">- J. R. R. Tolkien</p>
      </section>

      <div className="footerLotr-rights">
        <p>© 2022 TheOne. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterLotr