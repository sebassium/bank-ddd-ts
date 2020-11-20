import express from "express";
import customerRoutes from "./customer/CustomerRoutes";

const apiRoutes = express();

apiRoutes.use('/customer', customerRoutes);

export default apiRoutes;
