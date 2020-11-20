import {Request, Response} from "express";
import {CustomerId} from "../../../core/customer/domain/CustomerId";
import {CustomerPersonalNumber} from "../../../core/customer/domain/CustomerPersonalNumber";
import {CustomerFirstName} from "../../../core/customer/domain/CustomerFirstName";
import {CustomerLastName} from "../../../core/customer/domain/CustomerLastName";
import {CustomerPhoneNumber} from "../../../core/customer/domain/CustomerPhoneNumber";

const create = async ({createCustomer, body }: Request, res: Response) => {
    try {
        const customerId = new CustomerId(body.customerId);
        const personalNumber = new CustomerPersonalNumber(body.personalNumber);
        const firstName = new CustomerFirstName(body.firstName);
        const lastName = new CustomerLastName(body.lastName);
        const phoneNumber = new CustomerPhoneNumber(body.phoneNumber);

        const result = await createCustomer.execute(customerId, personalNumber, firstName, lastName, phoneNumber);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }
};

export default create;