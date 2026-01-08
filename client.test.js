import test, { describe } from 'node:test';
import assert from 'node:assert';
import { Airport } from "./classes/Airport.js";
import { RegularPassenger } from "./classes/Passenger/RegularPassenger.js";
import { StudentPassenger } from "./classes/Passenger/StudentPassenger.js";


const airport = new Airport()
const studentPassenger = new StudentPassenger('Avi', '1', 2000, 'Kodcode');
const regularPassenger = new RegularPassenger('Dan', '2', 15000, 'Refael', true);
const flight = airport.flights[0];

describe('passenger buyTicket method', () => {
    test('should return false if not enough mony', () => {
        assert.strictEqual(studentPassenger.buyTicket(flight, 'vip'), false)
    })
    test('ticket owner name should be Dan and is amountMony should be 12,600', () => {
        const ticket = regularPassenger.buyTicket(flight, 'vip');
        assert.strictEqual(ticket.ownerName, regularPassenger.name);
        assert.strictEqual(regularPassenger.amountMony, 12,600);
    })
})
