import React from 'react';
import '../App.css';
import greeksalad from '../icons_assets/GreekSalad.jpg'
import bruchetta from  '../icons_assets/bruchetta.svg'
import lemonDessert from '../icons_assets/LemonDessert.jpg'
const SpecialsSection = () => {
  const menuItems = [
    {
      image: greeksalad,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
      orderLink: '#'
    },
    {
      image: bruchetta,
      name: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      orderLink: '#'
    },
    {
      image: lemonDessert,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straitght from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      orderLink: '#'
    },
  ];

  return (
    <section className="SpecialsSection">
      <div className="SpecialsSection-header">
        <h2>This week's specials!</h2>
        <button className="SpecialsSection-button">Online Menu</button>
      </div>
      <div className="SpecialsSection-cards">
        {menuItems.map((item, index) => (
          <div key={index} className="SpecialsSection-card">
            <img src={item.image} alt={item.name} className="SpecialsSection-card-image" />
            <h3>{item.name}</h3>
            <p className="SpecialsSection-card-price">{item.price}</p>
            <p>{item.description}</p>
            <a href={item.orderLink} className="SpecialsSection-order-link">
              Order delivery
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialsSection;