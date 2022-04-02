import { Address } from "../models/address.model";
import { Item } from "../models/item.model";
import { Restaurant } from "../models/restaurant.model";

export interface Cart {
    restaurant: Restaurant;
    items: Item[];
    totalItem?: number;
    location?: Address;
    from?: string;
}