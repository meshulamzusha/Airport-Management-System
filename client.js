import { Airport } from "./classes/Airport.js";
import { RegularPassenger } from "./classes/Passenger/RegularPassenger.js";
import { StudentPassenger } from "./classes/Passenger/StudentPassenger.js";

function simulateAirportSystem() {
    const airport = new Airport()
    const studentPassenger = new StudentPassenger('Avi', '1', 2000, 'Kodcode');
    const regularPassenger = new RegularPassenger('Dan', '2', 15000, 'Refael', true);
    const flight = airport.flights[0];
    studentPassenger.buyTicket(flight, 'vip');

}

simulateAirportSystem()
