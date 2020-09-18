import { Price } from './price.model';

export class Item {
    id: number;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;

    constructor() {
        this.price = new Price();
    }
};