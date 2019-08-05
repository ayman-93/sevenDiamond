import React from 'react';
// import CardImg from '../Assist/cardsPic/7_of_diamonds.png';
const cards = [[], [], [], []];
for (let i = 6; i <= 13; i++) {
  const diamond = require(`../Assist/cardsPic/${i}_of_diamonds.png`);
  const heart = require(`../Assist/cardsPic/${i}_of_hearts.png`);
  const spade = require(`../Assist/cardsPic/${i}_of_spades.png`);
  const club = require(`../Assist/cardsPic/${i}_of_clubs.png`);
  cards[0].push(diamond);
  cards[1].push(heart);
  cards[2].push(spade);
  cards[3].push(club);
}

let drag = (ev, type, num) => {
  console.log('type ', type, 'num ', num, 'target: ', ev.target);
  let cardDate = [type, num];
  //   console.log(cardDate);

  ev.dataTransfer.setData('CardNum', cardDate);
  //   ev.dataTransfer.setData('CardType', type);
  //   ev.dataTransfer.setData('Cardm', cardDate);
  let CardN = ev.dataTransfer.getData('CardNum');
  //   let CardT = ev.dataTransfer.getData('CardType');
  console.log(CardN[0], CardN[2], typeof CardN);
  console.log();
};

const Card = ({ type, number }) => {
  return (
    <div
      className="card"
      draggable={true}
      onDragStart={e => drag(e, type, number)}
    >
      <img src={cards[type][number]} alt="card" draggable={false} />
    </div>
  );
};

export default Card;
