import {AccountId} from "../../../../src/core/account/domain/AccountId";
import {Account} from "../../../../src/core/account/domain/Account";
import {CustomerIdMother} from "../../customer/domain/CustomerIdMother";

export class AccountMother {

    static withAccountId(accountId: AccountId) {
        return Account.create(accountId, CustomerIdMother.random())
    }

}