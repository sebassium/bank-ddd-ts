import {Request, Response} from "express";
import {GetCustomerData} from "../../../core/customer/application/GetCustomerData";
import {CustomerGetDataService} from "../../services/customer/CustomerGetDataService";

const get = async (req: Request, res: Response) => {

    const { body, customerRepository } = req;
    try {
        const getCustomerData = new GetCustomerData(customerRepository);
        const customerGetDataService = new CustomerGetDataService(getCustomerData);

        const result = await customerGetDataService.run(body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }

};

export default get;