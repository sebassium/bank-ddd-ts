import {CustomerRepository} from "../domain/CustomerRepository";
import {Customer} from "../domain/Customer";
import {CustomerId} from "../domain/CustomerId";

export class InMemoryCustomerRepository implements CustomerRepository {

    private _database = new Map();

    findById(customerId: CustomerId): Promise<Customer> {
        const consumer = this._database.get(customerId.value);
        return Promise.resolve(consumer);
    }

    save(customer: Customer): Promise<void> {
        this._database.set(customer.id.value, customer);
        return Promise.resolve();
    }

}