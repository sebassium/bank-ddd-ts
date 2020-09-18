import {CustomerPhoneNumber} from "../../../../src/core/customer/domain/CustomerPhoneNumber";
import {FakeValue} from "../../shared/domain/FakeValue";

export class CustomerPhoneNumberMother {

    static random(): CustomerPhoneNumber {
        return new CustomerPhoneNumber(FakeValue.get().phone.phoneNumber());
    }

}