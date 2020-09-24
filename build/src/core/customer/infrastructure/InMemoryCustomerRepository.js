"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCustomerRepository = void 0;
class InMemoryCustomerRepository {
    constructor() {
        this._database = new Map();
    }
    findById(id) {
        const customer = this._database.get(id.value);
        if (!customer) {
            throw new Error('Customer does not exist');
        }
        return Promise.resolve(customer);
    }
    save(customer) {
        this._database.set(customer.id.value, customer);
        return Promise.resolve();
    }
}
exports.InMemoryCustomerRepository = InMemoryCustomerRepository;
