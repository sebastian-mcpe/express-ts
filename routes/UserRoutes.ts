import express, { Router } from 'express';
import { CreateUser, CountUsers } from '../controllers/UserController';

const UserRouter = Router();

UserRouter.post("/add", CreateUser);
UserRouter.get("/count", CountUsers);

export default UserRouter;