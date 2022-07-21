import React from 'react'

function ApiGot() {
  return (
    <div>ApiGot</div>
  )
}

export default ApiGot

// export default class ApiGot {
//   constructor() {
//     this._apiBase = "https://www.anapioficeandfire.com/api";
//   }

//   getResource = async (url) => {
//     const res = await fetch(`${this._apiBase}${url}`);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}``, received ${res.status}`);
//     }
//     return await res.json();
//   };

//   getAllBooks() {
//     return this.getResource(`/books/`);
//   }

//   getBook(id) {
//     return this.getResource(`/books/${id}/`);
//   }

//   async getAllCharacters() {
//     const res = await this.getResource(`/characters?page=5&pageSize=10`);
//     return res.map(this._transformCharacter); 
//   }

//   async getCharacter(id) {
//     const character = await this.getResource(`/characters/${id}`);
//     // console.log(this._transformCharacter(character));
//     return this._transformCharacter(character); 
//   }

//   getAllHouses() {
//     return this.getResource(`/houses/`);
//   }

//   getHouse(id) {
//     return this.getResource(`/houses/${id}/`);
//   }

//   isSet = (data) => {
//     if (data) {
//       return data;
//     } else {
//       return "no data :(";
//     }
//   };

//   _extractId = (item) => {
//     const idRegExp = /\/([0-9]*)$/;
//     return item.url.match(idRegExp)[1];
//   };

//   _transformCharacter = (char) => {
//     
//     return {
//       name: this.isSet(char.name),
//       gender: this.isSet(char.gender),
//       born: this.isSet(char.born),
//       died: this.isSet(char.died),
//       culture: this.isSet(char.culture),
//       id: this._extractId(char),
//     };
//   };

//   _transformHouse(house) {
//     
//     return {
//       name: house.name,
//       region: house.region,
//       words: house.words,
//       titles: house.titles,
//       overlord: house.overlord,
//       ancestralWeapons: house.ancestralWeapons,
//     };
//   }
//   _transformBook(book) {
//     
//     return {
//       name: book.name,
//       numberOfPages: book.numberOfPages,
//       publiser: book.publiser,
//       released: book.released,
//     };
//   }
// }