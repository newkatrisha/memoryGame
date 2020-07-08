import React, { useEffect, useState, useCallback } from "react";
import PickedCard from "./PickedCard";
import {
  find,
  open,
  disable,
  getSrcById,
  getNewBoard
} from "../utils/functions";
import "../index.css";
import { WIDTH, HEIGHT } from "../utils/constants";

const Board = () => {
  const [cards, setCards] = useState([]);

  const [score, setScore] = useState(0);

  const [card1, setCard1] = useState(null);

  const [card2, setCard2] = useState(null);

  const [tmpOpened, settmpOpened] = useState(0);

  const [boardIndexes, setBoardIndexes] = useState(null);

  const flipCard = card => {
    if (tmpOpened === 2 || !card.clickable || (card1 && card.id === card1.id))
      return;
    const x = find(card, cards);
    cards[x] = open(cards[x]);
    setCards(cards);
    if (card1 && card.id !== card1.id) {
      setCard2(cards[x]);
    } else {
      setCard1(cards[x]);
    }
    settmpOpened(tmpOpened + 1);
  };

  const closeCard = card => {
    setCards(prev =>
      prev.map(c => {
        if (c.id !== card.id) return c;
        return { ...c, opened: false };
      })
    );
  };

  const resetCards = () => {
    setCard1(null);
    setCard2(null);
  };

  const onFailure = useCallback(
    (card1, card2) => {
        console.log('in callback on failure');
      setTimeout(() => {
        closeCard(card1);
      }, 1000);
      setTimeout(() => {
        closeCard(card2);
        settmpOpened(0);
      }, 1200);
      resetCards();
    },
    [settmpOpened, closeCard]
  );

  const onSuccess = useCallback(
    (card1, card2) => {
        console.log('in callback on success');
      let x = find(card1, cards);
      let y = find(card2, cards);
      cards[x] = disable(cards[x]);
      cards[y] = disable(cards[y]);
      setCards(cards);
      resetCards();
      setScore(score + 10);
      settmpOpened(0);
    },
    [cards, setScore, settmpOpened, score, setCards]
  );

  const newGame = () => {
    setBoardIndexes(getNewBoard());
    setScore(0);
    const cards = [];
    for (var i = 0; i < WIDTH * HEIGHT; i++) {
      cards.push({
        id: i,
        clickable: true,
        opened: false,
        image: ""
      });
    }
    setCards(cards);
  }

  useEffect(() => {
      console.log('in use effect create board');
    newGame();
  }, []);

  useEffect(() => {
      console.log('in use effect card1');
    if (!card1 || !card2) return;
    else if (card1.image !== card2.image) {
      onFailure(card1, card2);
    } else {
      onSuccess(card1, card2);
    }
  }, [card1, card2, onFailure, onSuccess]);

  

  const memoryCards = cards.map((card, i) => {
      console.log('in memory cards');
    return (
      <PickedCard
        key={card.id}
        card={card}
        src={boardIndexes ? getSrcById(boardIndexes[i]) : getSrcById(0)}
        onClick={() => flipCard(card)}
      />
    );
  });
  console.log("here in board component");

  const message = score < 100 ? <p>Score: {score}</p> : <p onClick={newGame}>You won!!! Click to play again!</p>

  return (
    <div className="game">
      {message}
      <div className="board">{memoryCards}</div>
    </div>
  );
};

export default Board;
