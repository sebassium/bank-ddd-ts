"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, idNumber, firstName, lastName, phoneNumber) {
        this._id = id;
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }
    static create(id, idNumber, firstName, lastName, phoneNumber) {
        return new Customer(id, idNumber, firstName, lastName, phoneNumber);
    }
    get id() {
        return this._id;
    }
    get idNumber() {
        return this._idNumber;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
}
exports.Customer = Customer;
