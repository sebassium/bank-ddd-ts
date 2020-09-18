import {FakeValue} from "../../shared/domain/FakeValue";
import {CustomerIdNumber} from "../../../../src/core/customer/domain/CustomerIdNumber";

export class CustomerIdNumberMother  {

    static random(): CustomerIdNumber {
        return new CustomerIdNumber(FakeValue.get().random.alphaNumeric(10));
    }

}