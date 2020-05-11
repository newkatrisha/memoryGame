import React, { useState } from 'react';
import Img from '../../src/square-png-25139.png';
import PickedCard from '../components/PickedCard';

const Game = () => {
    console.log('hi');
    const [ cards, setCards ] = useState(
        [
        { id: 0, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg' },
        { id: 1, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image1.jpg' },
        { id: 2, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image2.jpg' },
        { id: 3, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image3.jpg' },
        { id: 4, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image4.jpg' },
        { id: 5, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image5.jpg' },
        { id: 6, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image6.jpg' },
        { id: 7, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image7.jpg' },
        { id: 8, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image8.jpg' },
        { id: 9, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image9.jpg' },
        { id: 10, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image10.jpg' },
        { id: 11, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image11.jpg' },
        { id: 12, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image12.jpg' },
        { id: 13, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image13.jpg' },
        { id: 14, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image14.jpg' },
        { id: 15, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image15.jpg' },
        { id: 16, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image16.jpg' },
        { id: 17, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image17.jpg' },
        { id: 18, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image18.jpg' },
        { id: 19, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image19.jpg' },
        { id: 20, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image20.jpg' }
    ])

    console.log(cards);
    
    const memoryCards = cards.map(card => {
        return <PickedCard key={card.id} card={card} hiddenImage={Img} />
    })

    return (
        <div>
            <h1>Memory Game</h1>
            <p>Score:</p>
            <div className="ui container">
                {memoryCards}
            </div>
    </div>
        
    )
}

export default Game;

