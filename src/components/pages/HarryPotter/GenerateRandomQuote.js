import React from 'react'
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from './QuotesDatabase'


class GenerateRandomQuote extends React.Component {
    constructor() {
      super();
      this.state = {
        quote: quotes[0].quote,
        author: quotes[0].author,
      };
    }
    randomQuote() {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      return quotes[randomNumber];
      
    }
    shuffleQuotes(array){
      return array.sort(()=>Math.random()-0.5)
    }
  
    handleClick = () => {
      const generateRandomQuote = this.randomQuote();
      this.setState({
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
      });
      this.shuffleQuotes(quotes)
    };
  
    randomColor() {
      const color = "#181818"
            return color;
    }
    
    render() {
      return (
        <div>
          <QuoteAndAuthor
            displayColor={this.randomColor}
            handleClick={this.handleClick}
            {...this.state}
          />
        </div>
      );
    }
  }
  

export default GenerateRandomQuote