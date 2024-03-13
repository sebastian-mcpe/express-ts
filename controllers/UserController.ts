import { Request, Response } from 'express';
import { AddUser, UserCount } from '../services/DatabaseData';

const CreateUser = async (req: Request, res: Response) => {
    const user:UserRegistrationModel = req.body;
    const result = await AddUser(user.name, user.email, user.password);
    res.send(result);
}

const CountUsers = async (req: Request, res: Response) => {
    const result = await UserCount();
    res.send({regg: result});
}

export { CreateUser, CountUsers };