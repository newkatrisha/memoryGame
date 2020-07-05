import React, { useEffect, useState, useContext, useCallback } from 'react';
import PickedCard from './PickedCard';
import { CardContext } from '../components/CardContext';
import { find, open, disable } from '../utils/functions';
import '../index.css';


const Board = () => {

    const { cards, setCards } = useContext(CardContext);

    const [ score, setScore ] = useState(0);

    const [ card1, setCard1 ] = useState(null);

    const [ card2, setCard2 ] = useState(null);

    const [tmpOpened, settmpOpened] = useState(0);

    
    const flipCard = (card) => {
        
        if (tmpOpened === 2 || !card.clickable || card1 && card.id === card1.id) return;
        const x = find(card, cards);
        cards[x] = open(cards[x]);
        setCards(cards);
        if (card1 && card.id !== card1.id) {
            setCard2(cards[x]);
        }
        else { 
            setCard1(cards[x]);
        }
        settmpOpened(tmpOpened+1);
    }

    const closeCard = (card) => {
        setCards(prev => prev.map(c => {
            if(c.id !== card.id) return c;
            return {...c, opened: false}
        })) 
    }

    const onFailure = useCallback((card1, card2) => {
            
        setTimeout(() => {
            closeCard(card1);
        }, 1000);
        setTimeout(() => {
            closeCard(card2);
            settmpOpened(0);
        }, 1200);
        resetCards(); 
    }, [settmpOpened, closeCard]);

    const onSuccess = useCallback((card1, card2) => {

        let x = find(card1, cards);
        let y = find(card2, cards);
        cards[x] = disable(cards[x]);
        cards[y] = disable(cards[y]);
        setCards(cards);
        resetCards();
        setScore(score+10);    
        settmpOpened(0);

    }, [cards,setScore,settmpOpened,score,setCards])

    const resetCards = () => {
        setCard1(null);
        setCard2(null);
    }
   
    useEffect(() => {
        console.log(tmpOpened);
        if (!card1 || !card2)
            return;
        else if (card1.url !== card2.url){
            onFailure(card1, card2);
        } else {
            onSuccess(card1, card2); 
        }       
    }, [card1, card2, onFailure, onSuccess])


    const memoryCards = cards.map(card => {
        return <PickedCard key={card.id} card={card} onClick={() => flipCard(card)} />
    })

    return (
        <div className='game'>
            <p>Score: {score}</p>
            <div className='board'>
                {memoryCards}
            </div>
        </div>
    )
}

export default Board;
