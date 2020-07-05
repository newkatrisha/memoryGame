import React, { createContext, useState } from 'react';
import _ from 'lodash';

export const CardContext = createContext();

const CardContextProvider = (props) => {
    const [cards, setCards] = useState(_.sampleSize([
        { id: 0,  clickable: true, opened: false },
        { id: 1,  clickable: true, opened: false },
        { id: 2,  clickable: true, opened: false },
        { id: 3,  clickable: true, opened: false },
        { id: 4,  clickable: true, opened: false },
        { id: 5,  clickable: true, opened: false },
        { id: 6,  clickable: true, opened: false },
        { id: 7,  clickable: true, opened: false },
        { id: 8,  clickable: true, opened: false },
        { id: 9,  clickable: true, opened: false },
        { id: 10, clickable: true,  opened: false },
        { id: 11, clickable: true,  opened: false },
        { id: 12, clickable: true,  opened: false },
        { id: 13, clickable: true,  opened: false },
        { id: 14, clickable: true,  opened: false },
        { id: 15, clickable: true,  opened: false },
        { id: 16, clickable: true,  opened: false },
        { id: 17, clickable: true,  opened: false },
        { id: 18, clickable: true,  opened: false },
        { id: 19, clickable: true,  opened: false }
    ], 20));

    
    return (
        <CardContext.Provider value={{cards, setCards}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;