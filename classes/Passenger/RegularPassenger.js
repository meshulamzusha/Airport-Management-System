import { BasePassenger } from "./BasePassenger.js";

export class RegularPassenger extends BasePassenger {
    constructor(name, id, amountMony, workplace, knowsAirportEmployee) {
        super(name, id, amountMony);
        this.workplace = workplace;
        this.knowsAirportEmployee = knowsAirportEmployee;
    }

    buyTicket(flight, type) {
        if (this.amountMony < flight.regularTicketPrice) {
            return false
        }

        if (type == 'regular') {
            try {
                const ticket = flight.setRegularTicketOwner(this.name);

                if (this.knowsAirportEmployee) {
                    discount = (flight.regularTicketPrice / 100) * 20;
                    payment = flight.regularTicketPrice - discount;
                    this.amountMony -= payment;
                } else {
                    this.amountMony -= flight.regularTicketPrice
                }

                return ticket

            } catch (error) {
                return error.message
            }
        }

        if (type == 'vip') {
            try {
                const ticket = flight.setVipTicketOwner(this.name);

                if (this.knowsAirportEmployee) {
                    discount = (flight.vipTicketPrice / 100) * 15;
                    payment = flight.vipTicketPrice - discount;
                    this.amountMony -= payment;
                } else {
                    this.amountMony -= flight.vipTicketPrice
                }
                return ticket
            } catch (error) {
                return error.message
            }
        }

    }
}