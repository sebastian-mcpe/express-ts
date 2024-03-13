import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

function OpenConnection() {
    prisma.$connect()
}

function CloseConnection() {
    prisma.$disconnect()
}

async function AddUser(name:string, email:string, password:string) {
    OpenConnection();
    const result = await prisma.users.upsert({
        create: {
            name: name,
            email: email,
            password: password
        },
        update: {
            name: name,
            email: email,
            password: password
        },
        where: {
            email: email
        }
    });
    CloseConnection();
    return result;
}

async function UserCount() {
    OpenConnection();
    const userCount = await prisma.users.count();
    CloseConnection();
    return userCount;
}

export { AddUser, UserCount };