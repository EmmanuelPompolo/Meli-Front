import { ItemDetail } from './item-detail.model';
import { Item } from './item.model';

export class ProductDetail {
    item: ItemDetail;

    constructor() {
        this.item = new ItemDetail();
    }
}