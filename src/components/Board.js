import React, { useEffect, useState, useContext } from 'react';
import Img from '../../src/square-png-25139.png';
import PickedCard from './PickedCard';
import { Grid } from 'semantic-ui-react';
import { CardContext } from '../CardContext';
import _ from 'lodash';


const Board = () => {

    const { cards, setCards } = useContext(CardContext);

    const [ score, setScore ] = useState(null);

    const [ card1, setCard1 ] = useState(null);

    const [ card2, setCard2 ] = useState(null);


    const flipCard = (card) => {
        if(!card.clickable) return null
        
        else {
            let x = cards.findIndex(c => c.id === card.id);
            let newArr = [...cards];
            newArr[x] = {...newArr[x], opened: true}
            setCards(newArr);
            if (card1 && card.id !== card1.id && card.clickable)
                setCard2(newArr[x]);
            else setCard1(newArr[x]);
        } 
    }

    useEffect(() => {
        const board = _.sampleSize(cards, 20);
        setCards(board);
        console.log(board);
    }, [])

    useEffect(() => {
        const setCardIsOpened = (card, opened) => {
            setCards(prev => prev.map(c => {
                if(c.id !== card.id) return c;
                return {...c, opened}
            })) 
        }

        const onSuccess = (card1, card2) => {
            let newArr = [...cards];
            let x = cards.findIndex(c => c.id === card1.id);
            let y = cards.findIndex(c => c.id === card2.id);
            newArr[x] = {...newArr[x], clickable: false};
            newArr[y] = {...newArr[y], clickable: false};
            setCards(newArr);
            resetCards();
            setScore(score+10);
        }
    
        const onFailure = () => {
            setTimeout(() => {
                setCardIsOpened(card1, false)
            }, 1000);
            setTimeout(() => {
                setCardIsOpened(card2, false)
            }, 1200);
            resetCards();
        }

        const resetCards = () => {
            setCard1(null);
            setCard2(null);
        }
        
        if (!card1 || !card2)
            return;
        else if(card1 && card2 && card1.url !== card2.url){
            onFailure();
        } else onSuccess(card1, card2);     
    }, [card1, card2, cards, score, setCards])


    const memoryCards = cards.map(card => {
        return <PickedCard key={card.id} card={card} hiddenImage={Img} onClick={() => flipCard(card)} />
    })

    return (
        <div>
            <h1>Memory Game</h1>
            <p>Score: {score}</p>
            <div className="ui container">
               <Grid columns={6}>
                   <Grid.Row>
                       {memoryCards}
                    </Grid.Row>
               </Grid>    
            </div>
        </div>
    )
}

export default Board;

