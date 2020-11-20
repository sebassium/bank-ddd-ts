import {AccountId} from "../../../../src/core/account/domain/AccountId";
import {FakeValue} from "../../shared/domain/FakeValue";

export class AccountIdMother {

    static random(): AccountId {
        return new AccountId(FakeValue.get().random.uuid());
    }

}