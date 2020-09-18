"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(idNumber, firstName, lastName, phoneNumber) {
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }
    static create(idNumber, firstName, lastName, phoneNumber) {
        return new Customer(idNumber, firstName, lastName, phoneNumber);
    }
}
exports.Customer = Customer;
