import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {
    const [cards, setCards] = useState([
        { id: 0,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg' },
        { id: 1,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image1.jpg' },
        { id: 2,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image0.jpg' },
        { id: 3,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image1.jpg' },
        { id: 4,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image4.jpg' },
        { id: 5,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image5.jpg' },
        { id: 6,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image4.jpg' },
        { id: 7,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image5.jpg' },
        { id: 8,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image8.jpg' },
        { id: 9,  clickable: true, opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image9.jpg' },
        { id: 10, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image8.jpg' },
        { id: 11, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image9.jpg' },
        { id: 12, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image12.jpg' },
        { id: 13, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image13.jpg' },
        { id: 14, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image12.jpg' },
        { id: 15, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image13.jpg' },
        { id: 16, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image16.jpg' },
        { id: 17, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image17.jpg' },
        { id: 18, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image17.jpg' },
        { id: 19, clickable: true,  opened: false, url: 'https://www.memozor.com/jeux/jquery/objects_diy/image16.jpg' }
    ]);

    
    return (
        <CardContext.Provider value={{cards, setCards}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;