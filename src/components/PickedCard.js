import React from 'react';
import { Image, Reveal } from 'semantic-ui-react';

const PickedCard = (props) => {
    console.log(props);
    return(
        <Reveal animated='small fade'>
            <Reveal.Content visible>
                <Image src={props.hiddenImage} />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image src={props.card.url} />
            </Reveal.Content>
        </Reveal>
    )
}

export default PickedCard;