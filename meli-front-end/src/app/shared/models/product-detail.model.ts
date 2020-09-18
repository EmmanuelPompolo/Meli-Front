import { ItemDetail } from './item-detail.model';
import { Item } from './item.model';

export class ProductDetail {
    items: ItemDetail[];

    constructor() {
        this.items = [];
    }
}