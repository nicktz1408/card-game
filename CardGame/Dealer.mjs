import Card, { cardNumbers, cardTypes } from './Card.mjs';
// const { cardNumbers, cardT }

export default class Dealer {
    constructor() {
        this.cardStack = this.randomCardStack();
    }

    getCard() {
        return this.cardStack[this.cardStack.length - 1];
    }

    removeCard() {
        this.cardStack.pop();
    }

    randomCardStack() {
        const orderedStack = this.orderedCardStack();
        const randomStack = [];

        while(orderedStack.length > 0) {
            const randomNumber = Math.floor(Math.random() * orderedStack.length);

            randomStack.push(orderedStack[randomNumber]);
            orderedStack.splice(randomNumber, 1);
        }
        
        return randomStack;
    }

    orderedCardStack() {
        const ordered = [];

        console.log(cardTypes)

        for(const type of Object.keys(cardTypes)) {
            for(const number of Object.keys(cardNumbers)) {
                ordered.push(new Card(number, type));
            }
        }

        return ordered;
    }
}