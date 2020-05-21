import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import Img from '../../src/square-png-25139.png';


const PickedCard = ({card, onClick}) => {

    return(
        !card.opened ? 
        <Card>
            <Image src={Img} id={card.id} onClick={onClick}/>
        </Card> :
        <Card>
            <Image src={card.url} id={card.id} onClick={onClick} />
        </Card>
    )  
}

export default PickedCard;

