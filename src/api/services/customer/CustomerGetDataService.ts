import {CustomerId} from "../../../core/customer/domain/CustomerId";
import {GetCustomerData} from "../../../core/customer/application/GetCustomerData";

export class CustomerGetDataService {

    constructor(private getCustomerData: GetCustomerData) {}

    run(body: Body) {
        const id = new CustomerId(body.id);
        return this.getCustomerData.execute(id);
    }

}

export type Body = {
    id: string
}