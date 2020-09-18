import { Item } from './item.model';

export class ProductList {
    categories: Array<string>;
    items: Item[];

    constructor() {
        this.categories = [],
        this.items = []
    }
}