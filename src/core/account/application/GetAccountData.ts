import {AccountRepository} from "../domain/AccountRepository";
import {AccountId} from "../domain/AccountId";
import {CustomerId} from "../../customer/domain/CustomerId";

export class GetAccountData {

    private _accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository) {
        this._accountRepository = accountRepository;
    }

    async execute(accountId: AccountId): Promise<AccountData> {
        const account = await this._accountRepository.findById(accountId);

        return {
            accountId: account.accountId.value,
            customerId: account.customerId.value
        }
    }

}

export type AccountData = {
    accountId: string;
    customerId: string;
}