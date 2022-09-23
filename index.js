import express from 'express';
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import { getProperty } from './config/propertyReader.js';

const app = express();
const PORT = getProperty('server.port');

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));