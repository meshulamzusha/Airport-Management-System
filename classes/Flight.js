import { RegularTicket } from "./Ticket/RegularTicket.js";
import { VipTicket } from "./Ticket/VipTicket.js";


export class Flight {
    constructor(
        flightName,
        airline,
        flightNumber,
        maximumPassengers,
        regularTicketPrice,
        vipTicketPrice,
    ) {
        this.flightName = flightName;
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.maximumPassengers = maximumPassengers;
        this.regularTicketPrice = regularTicketPrice;
        this.vipTicketPrice = vipTicketPrice;
        this.tickets = [];
    }

    createRegularTickets(amount) {
        for (let i = 0; i <= amount; i++) {
            let ticket = new RegularTicket(this.regularTicketPrice, "");
            this.tickets.push(ticket)
        }
    }

    createVipTickets(amount) {
        for (let i = 0; i <= amount; i++) {
            let ticket = new VipTicket(this.vipTicketPrice, "");
            this.tickets.push(ticket)
        }
    }

    setRegularTicketOwner(name) {
        const index = this.tickets.findIndex(t => 
            t instanceof RegularTicket && t.name == ""
        )

        if (index == -1) {
            throw new Error("Regular tickets are sold out.");
        }

        this.tickets[index].ownerName = name

        return this.tickets[index]
    }

    setVipTicketOwner(name) {
        const index = this.tickets.findIndex(t => 
            t instanceof VipTicket && t.name == ""
        )

        if (index == -1) {
            throw new Error("VIP tickets are sold out.");
        }

        this.tickets[index].ownerName = name

        return this.tickets[index]
    }
}
