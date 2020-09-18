import { Item } from './item.model';

export class ItemList {
    categories: Array<string>;
    items: Item[];

    constructor() {
        this.categories = [],
        this.items = []
    }
}