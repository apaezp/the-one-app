import React from 'react'
import "./FooterHp.css"
import GenerateRandomQuote from './GenerateRandomQuote'



function FooterHp() {
  return (
<>
<div className="footerHp-container">

  <section className="footerHp-quote"> 

  <GenerateRandomQuote />
  </section>

  <div className="footerHp-rights">
  <p>© 2022 TheOne. All rights reserved.</p>
</div>

  </div>

  </>
  );
}



export default FooterHp