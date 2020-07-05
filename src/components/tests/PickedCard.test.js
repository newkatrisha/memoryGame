import React from 'react';
import { shallow } from 'enzyme';
import setupTest from './setupTest';
import PickedCard from '../PickedCard';
import { object, func } from 'prop-types';

const closed = {
    opened: false,
    url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg'
}

const opened = {
    opened: true,
    url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg'
}

describe('Picked Card', () => {
    
    it('should show empty card when closed', () => {
        const wrapper = shallow(<PickedCard card={closed}/>);
        const image = wrapper.find('img').prop('src');
        expect(image).not.toBe(closed.url)
    })

    it('should show image card when opened', () => {
        const wrapper = shallow(<PickedCard card={opened}/>);
        const image = wrapper.find('img').prop('src');
        expect(image).toBe(opened.url)
    })  

    it('should call mockFunc on click', () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(<PickedCard card={opened} onClick = {mockFunc} />);
        const image = wrapper.find('img');
        image.simulate('click');
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })

    it('should render one card', () => {
        const wrapper = shallow(<PickedCard card={opened} />);
        expect(wrapper.find('img')).toHaveLength(1);
    })

    it('should render with correct proptypes', () => {
        expect(PickedCard.propTypes.card).toBe(object);
        expect(PickedCard.propTypes.onClick).toBe(func);
    })

    // it('should render default props', () => {
    //     const wrapper = shallow(<PickedCard card={opened} />);
    //     expect(PickedCard.defaultProps.onClick).toBe(e => e);
    // })
    
})
