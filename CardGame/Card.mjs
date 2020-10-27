export const cardNumbers = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    king: 'king',
    queen: 'queen',
    jack: 'jack',
};

export const cardTypes = {
    clubs: 'clubs',
    diamonds: 'diamonds',
    hearts: 'hearts',
    spaces: 'spaces'
};

export default class Card {
    constructor(number, type) {
        this.number = number;
        this.type = type;
    }
};