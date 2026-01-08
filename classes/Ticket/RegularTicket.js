import { BaseTicket } from "./BaseTicket.js";

export class RegularTicket extends BaseTicket {
    constructor(price, ownerName) {
        super(price, ownerName)
    }
}