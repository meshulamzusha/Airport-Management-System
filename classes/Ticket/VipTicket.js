import { BaseTicket } from "./BaseTicket.js";

export class VipTicket extends BaseTicket {
    constructor(price, ownerName) {
        super(price, ownerName)
        this.benefits = ['Free Alcohol', 'Free Food', 'Hot Towels']
    }
}