import { Address } from "./address.model";
import { Item } from "./item.model";
import { Restaurant } from "./restaurant.model";

export class Order {
    constructor(
        public address: Address,
        public restaurant: Restaurant,
        public user: any,
        public restaurant_id: string,
        public order: Item[],
        public total: number,
        public status: string,
        public time: string,
        public validate: string,
        public id?: string,
        public uid?: string,
        public instruction?: string,
    ) {}
}