import { Item } from './item.model';
import { Price } from './price.model';

export class ItemDetail extends Item {

    sold_quantity: number;
    description: string;

    constructor() {
        super();
    }
};