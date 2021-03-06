import express from 'express';
import provider from "./provider";
import apiRoutes from "./routes/Routes";

const app = express();

app.use(express.json());
app.use(provider)
app.use('/', apiRoutes);

export default app;