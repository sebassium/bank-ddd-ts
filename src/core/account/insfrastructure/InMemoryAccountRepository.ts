import {AccountRepository} from "../domain/AccountRepository";
import {AccountId} from "../domain/AccountId";
import {Account} from "../domain/Account";

export class InMemoryAccountRepository implements AccountRepository {

    private _database = new Map<string, Account>();

    findById(accountId: AccountId): Promise<Account> {
        const account = this._database.get(accountId.value);
        if (!account) {
            throw new Error('Account does not exist');
        }
        return Promise.resolve(account);
    }

    save(account: Account): Promise<void> {
        this._database.set(account.accountId.value, account);
        return Promise.resolve();
    }

}