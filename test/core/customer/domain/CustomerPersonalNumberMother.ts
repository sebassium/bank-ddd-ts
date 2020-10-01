import {FakeValue} from "../../shared/domain/FakeValue";
import {CustomerPersonalNumber} from "../../../../src/core/customer/domain/CustomerPersonalNumber";

export class CustomerPersonalNumberMother  {

    static random(): CustomerPersonalNumber {
        return new CustomerPersonalNumber(FakeValue.get().random.alphaNumeric(10));
    }

}