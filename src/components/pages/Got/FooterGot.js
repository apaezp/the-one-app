import React from "react";
import "./FooterGot.css";
import React, { useState, useEffect } from "react";



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
                    
                        <div className="box">
                            <p className="quote">{quotes.quote}</p>
                            <p className="author">{quotes.character}</p>
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
