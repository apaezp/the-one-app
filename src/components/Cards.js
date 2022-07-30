import React from 'react';
import './Cards.css';
import CardItem from './CardItem';





function Cards() {
  return (

    <div className='cards'>
      
      <h1>Check out our fandom pages!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.estrategiaynegocios.net/binrepository/740x370/70c0/600d370/none/26086/WAIH/got.2261_EN1275916_MG219671067.jpg'
              text='Game of Thrones'
              label='Fantasy'
              path='/pages/Got/HomeGot'
            />
            <CardItem
              src='https://wallpapercave.com/wp/wp3258300.jpg'
              text='Lord Of The Rings'
              label='Adventure'
              path='/pages/Lotr/HomeLotr'
            />
          </ul>
          <ul className='cards__items'>
          
            <CardItem
              src='https://fondosmil.com/fondo/23856.jpg'
              text='Harry Potter'
              label='Magic'
              path='/pages/HarryPotter/HomeHP'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards