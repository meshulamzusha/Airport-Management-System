import { Flight } from "./Flight.js";

export class Airport {
    constructor() {
        this.flights = [];
        this.createFlights();
        console.log(this.flights);
        
        // this.fillFlightsTickets()
    }

    createFlights() {
        const flight1 = new Flight("New York Express", "El Al", "LY001", 280, 850, 2400);
        const flight2 = new Flight("London Budget", "Ryanair", "FR1234", 189, 45, 120);
        const flight3 = new Flight("Eilat Executive", "Arkia", "IZ 802", 72, 250, 450);

        this.flights.push(flight1, flight2, flight3);
    }

    fillFlightsTickets() {
        for (let i = 0; i <= this.flights.length; i++) {
            let ninetyPercent = Math.floor((this.flights[i].maximumPassengers / 100) * 90);
            let tenPercent = Math.ceil((this.flights[i].maximumPassengers / 100) * 10);
            
            this.flights[i].createRegularTickets(ninetyPercent);
            this.flights[i].createVipTickets(tenPercent);
        }
    }
}




