import {AccountRepository} from "../../../../src/core/account/domain/AccountRepository";
import {AccountIdMother} from "../domain/AccountIdMother";
import {InMemoryAccountRepository} from "../../../../src/core/account/insfrastructure/InMemoryAccountRepository";
import {Account} from "../../../../src/core/account/domain/Account";
import {AccountId} from "../../../../src/core/account/domain/AccountId";
import {AccountData, GetAccountData} from "../../../../src/core/account/application/GetAccountData";
import {AccountMother} from "../domain/AccountMother";

describe('GetAccountData should', () => {

    let account: Account;
    let accountRepository: AccountRepository;
    let getAccountData: GetAccountData;
    let accountData : AccountData;

    test('return account data', async () => {

        const accountId = AccountIdMother.random();
        account = AccountMother.withAccountId(accountId);

        given_a_use_case()
        await given_a_saved_account()

        await when_getting_account_data(accountId);

        await then_returned_account_data_is_correct()
    });

    function given_a_use_case() {
        accountRepository = new InMemoryAccountRepository();
        getAccountData = new GetAccountData(accountRepository);
    }

    async function given_a_saved_account() {
        await accountRepository.save(account);
    }

    async function when_getting_account_data(accountId: AccountId) {
        accountData = await getAccountData.execute(accountId);
    }

    async function then_returned_account_data_is_correct() {
        expect(accountData).not.toBeNull();
        expect(accountData.accountId).toEqual(account.accountId.value);
        expect(accountData.customerId).toEqual(account.customerId.value);
    }

});