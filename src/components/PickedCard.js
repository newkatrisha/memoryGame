import React from "react";
import Img from "../../src/square-png-25139.png";
import propTypes from "prop-types";
import "../index.css";

const PickedCard = ({ card, onClick, src }) => {
  card.image = card.opened ? src : Img;
console.log('in card');
  return (
    <div className="card">
      <img alt="" src={card.image} onClick={onClick} />
    </div>
  );
};

PickedCard.propTypes = {
  card: propTypes.object,
  onClick: propTypes.func
};

PickedCard.defaultProps = {
  onClick: e => e
};

export default PickedCard;
