import _ from 'lodash';
import { NUMBER_OF_INDEXES, HEIGHT, WIDTH } from './constants';

export const find = (card, cards) => cards.findIndex(c => c.id === card.id);

export const open = (card) => {
    return(
        {...card, opened: true}
    )};
    
export const disable = (card) => {
    return(
        {...card, clickable: !card.clickable}
    )
}

export const getSrcById = id => `https://www.memozor.com/jeux/jquery/objects_diy/image${id}.jpg`;

export const getNewBoard = () => {
    const arrayIndexes = [...Array(NUMBER_OF_INDEXES).keys()];
    const subArrayIndexes = _.sampleSize(arrayIndexes, WIDTH * HEIGHT / 2);
    const board = [];
    subArrayIndexes.forEach(el => {
        board.push(el, el)
    });
    return _.sampleSize(board, WIDTH * HEIGHT);
}
