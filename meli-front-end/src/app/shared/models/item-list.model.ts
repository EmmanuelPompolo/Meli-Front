import { Item } from './item.model';

export interface ItemList {
    categories: Array<string>;
    items: Item[];
}