import React from 'react'
import "./FooterHp.css"

function FooterHp() {
  return (    
      <div clasName="footerHp-container">
        <section className="footerHp-quote">
          <p className="footerHp-quote-text">
            "TheOne is the best way to discover new things."
          </p>
          <p className="footerHp-quote-author">- J. K. Rowling.</p>
        </section>
  
        <div className="footerHp-rights">
          <p>© 2022 TheOne. All rights reserved.</p>
        </div>
      </div>
    );
  }
export default FooterHp