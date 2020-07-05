import React from 'react';
import { shallow } from 'enzyme';
import Board from '../Board';
import setupTest from './setupTest';
import { find, open, disable } from '../../utils/functions';
import { flipCard } from '../Board';

const testCard = {
    id: 0,  
    clickable: true, 
    opened: false, 
    url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg'
}

describe('Board', () => {
    describe('open card', () => {
        it('should open the card', () => {
            expect(open(testCard).opened).toBe(true);
        })
    })
    describe('find', () => {
        it('should find the index of the member in array', () => {
            const card = { name: 'apple', id: 2};
            const cards = [{name: 'orange', id: 0}, {name: 'pineapple', id: 1}, {name: 'banana', id: 3}, {name: 'apple', id: 2}];
            const found = find(card, cards);
            expect(found).toBe(3);
        })
    })
    describe('disable', () => {
        it('should disable the card', () => {
            expect(disable(testCard).clickable).toBe(false);
        })
    })
})