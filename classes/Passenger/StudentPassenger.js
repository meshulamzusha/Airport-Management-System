import { BasePassenger } from "./BasePassenger.js";

export class StudentPassenger extends BasePassenger {
    constructor(name, id, amountMony, schoolName) {
        super(name, id, amountMony);
        this.schoolName = schoolName;
    }

    buyTicket(flight, type) {
        if (this.amountMony < flight.regularTicketPrice) {
            return false
        }

        if (type == 'regular') {
            try {
                const ticket = flight.setRegularTicketOwner(this.name);
                discount = (flight.regularTicketPrice / 100) * 10;
                payment = flight.regularTicketPrice - discount;
                this.amountMony -= payment;
                return ticket
            } catch (error) {
                return error.message
            }
        }

        if (type == 'vip') {
            try {
                const ticket = flight.setVipTicketOwner(this.name);
                this.amountMony -= flight.vipTicketPrice;
                return ticket
            } catch (error) {
                return error.message
            }
        }

        return t
    }
}