import {CustomerFirstName} from "../../../../src/core/customer/domain/CustomerFirstName";
import {FakeValue} from "../../shared/domain/FakeValue";

export class CustomerFirstNameMother {

    static random(): CustomerFirstName {
        return new CustomerFirstName(FakeValue.get().name.firstName());
    }

}