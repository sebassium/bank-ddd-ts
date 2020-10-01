import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {Customer} from "../../../../src/core/customer/domain/Customer";
import {CustomerPersonalNumberMother} from "./CustomerPersonalNumberMother";
import {CustomerFirstNameMother} from "./CustomerFirstNameMother";
import {CustomerLastNameMother} from "./CustomerLastNameMother";
import {CustomerPhoneNumberMother} from "./CustomerPhoneNumberMother";

export class CustomerMother {

    static withCustomerId(customerId: CustomerId) {
        return Customer.create(
            customerId,
            CustomerPersonalNumberMother.random(),
            CustomerFirstNameMother.random(),
            CustomerLastNameMother.random(),
            CustomerPhoneNumberMother.random()
        )
    }

}