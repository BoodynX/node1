import express, { json } from "express";
import { root } from "./infra/routes/root.routes";
import { user } from "./infra/routes/user.routes";

const app = express();

// EXPRESS CONFIG

// auto parsing json body requests to objects
app.use(json());

// Adding Routes
app.use(root);
app.use(user);

export default app;
