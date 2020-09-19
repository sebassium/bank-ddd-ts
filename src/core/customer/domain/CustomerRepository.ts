import {CustomerId} from "./CustomerId";
import {Customer} from "./Customer";

export interface CustomerRepository {

    findById(customerId: CustomerId): Promise<Customer>;

    save(customer: Customer): Promise<void>;

}