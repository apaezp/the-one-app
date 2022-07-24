import React from "react";
import "./FooterGot.css";
import { useState, useEffect } from "react";



const FooterGot = () => {

    //Estados
    const [quotes, setQuotes] = useState([])

    useEffect(() => {

        fetch("https://got-quotes.herokuapp.com/quotes")
            .then(response => response.json())
            .then(data => setQuotes(data))

    }, [])


    return (
        <div className="footerGot-container">
            <section className="footerGot-quote">
                {
                    
                        <div className="footerGot-quote">
                            <p className="footerGot-quote-text">"{quotes.quote}"</p>
                            <p className="footerGot-quote-author">-- {quotes.character}.</p>
                        </div>
                    
                }
            </section>
            <div className="footerGot-rights">
                <p>© 2022 TheOne. All rights reserved.</p>
            </div>
        </div>
    );
}

export default FooterGot;
