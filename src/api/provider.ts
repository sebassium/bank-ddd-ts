import {NextFunction, Request, Response} from "express";
import {InMemoryCustomerRepository} from "../core/customer/infrastructure/InMemoryCustomerRepository";
import {CreateCustomer} from "../core/customer/application/CreateCustomer";
import {GetCustomerData} from "../core/customer/application/GetCustomerData";

const customerRepository = new InMemoryCustomerRepository();
const createCustomer = new CreateCustomer(customerRepository);
const getCustomerData = new GetCustomerData(customerRepository);

const provider = (req: Request, res: Response, next: NextFunction) => {
    req.createCustomer = createCustomer;
    req.getCustomerData = getCustomerData;
    return next();
}

export default provider;

declare global{
    namespace Express {
        interface Request {
            createCustomer: CreateCustomer
            getCustomerData: GetCustomerData
        }
    }
}