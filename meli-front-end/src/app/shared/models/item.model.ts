import { Price } from './price.model';

export interface Item {
    id: number;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
};