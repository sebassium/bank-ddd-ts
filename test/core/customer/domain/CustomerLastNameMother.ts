import {CustomerLastName} from "../../../../src/core/customer/domain/CustomerLastName";
import {FakeValue} from "../../shared/domain/FakeValue";

export class CustomerLastNameMother {

    static random(): CustomerLastName {
        return new CustomerLastName(FakeValue.get().name.lastName());
    }

}