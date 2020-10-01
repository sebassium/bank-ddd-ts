import {CustomerRepository} from "../domain/CustomerRepository";
import {Customer} from "../domain/Customer";
import {CustomerId} from "../domain/CustomerId";

export class InMemoryCustomerRepository implements CustomerRepository {

    private _database = new Map<string, Customer>();

    findById(customerId: CustomerId): Promise<Customer> {
        const customer = this._database.get(customerId.value);
        if (!customer) {
            throw new Error('Customer does not exist');
        }
        return Promise.resolve(customer);
    }

    save(customer: Customer): Promise<void> {
        this._database.set(customer.customerId.value, customer);
        return Promise.resolve();
    }

}