import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {Customer} from "../../../../src/core/customer/domain/Customer";
import {CustomerIdNumberMother} from "./CustomerIdNumberMother";
import {CustomerFirstNameMother} from "./CustomerFirstNameMother";
import {CustomerLastNameMother} from "./CustomerLastNameMother";
import {CustomerPhoneNumberMother} from "./CustomerPhoneNumberMother";

export class CustomerMother {

    static withId(id: CustomerId) {
        return Customer.create(
            id,
            CustomerIdNumberMother.random(),
            CustomerFirstNameMother.random(),
            CustomerLastNameMother.random(),
            CustomerPhoneNumberMother.random()
        )
    }

}