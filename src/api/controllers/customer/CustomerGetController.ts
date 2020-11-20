import {Request, Response} from "express";
import {CustomerId} from "../../../core/customer/domain/CustomerId";

const get = async ({ getCustomerData, body}: Request, res: Response) => {
    try {
        const customerId = new CustomerId(body.customerId);

        const result = await getCustomerData.execute(customerId);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }
};

export default get;

