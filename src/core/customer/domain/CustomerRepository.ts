import {CustomerId} from "./CustomerId";
import {Customer} from "./Customer";

export interface CustomerRepository {

    findById(id: CustomerId): Promise<Customer>;

    save(customer: Customer): Promise<void>;

}