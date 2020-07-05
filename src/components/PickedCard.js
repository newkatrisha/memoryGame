import React from 'react';
import Img from '../../src/square-png-25139.png';
import propTypes from 'prop-types';
import '../index.css';


const PickedCard = ({card, onClick, src}) => {
    
    const image = card.opened ? src : Img;
    
    return(
        <div className='card'>
            <img alt="" src={image} onClick={onClick}/>
        </div> 
    )  
}


PickedCard.propTypes = {
    card: propTypes.object,
    onClick: propTypes.func
}

PickedCard.defaultProps = {
    onClick: e => e
}



export default PickedCard;




