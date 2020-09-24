import express from 'express';
import { apiRoutes } from "./api/routes/Routes"
import {CustomerRepository} from "./core/customer/domain/CustomerRepository";
import {InMemoryCustomerRepository} from "./core/customer/infrastructure/InMemoryCustomerRepository";

const app = express();

app.use(express.json());

//TODO: What's the best way to inject the repository?
const customerRepository = new InMemoryCustomerRepository();
app.use((req, res, next) => {
    req.customerRepository = customerRepository;
    return next();
});

app.use('/', apiRoutes);

export default app;

declare global{
    namespace Express {
        interface Request {
            customerRepository: CustomerRepository
        }
    }
}