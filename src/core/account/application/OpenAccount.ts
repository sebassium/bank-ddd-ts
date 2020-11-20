import {AccountId} from "../domain/AccountId";
import {Account} from "../domain/Account";
import {CustomerId} from "../../customer/domain/CustomerId";
import {AccountRepository} from "../domain/AccountRepository";

export class OpenAccount {

    private _accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository) {
        this._accountRepository = accountRepository;
    }

    async execute(accountId: AccountId, customerId: CustomerId): Promise<void> {
        const account = Account.create(accountId, customerId);
        await this._accountRepository.save(account);
    }

}