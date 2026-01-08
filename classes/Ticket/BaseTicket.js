export class BaseTicket {
    constructor(price, ownerName) {
        this.ticketNumber = Math.floor(Math.random() * 50000)
        this.price = price,
        this.ownerName = ownerName
    }
}