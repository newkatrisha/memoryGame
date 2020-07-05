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