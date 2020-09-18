import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {FakeValue} from "../../shared/domain/FakeValue";

export class CustomerIdMother {

    static random(): CustomerId {
        return new CustomerId(FakeValue.get().random.uuid());
    }

}