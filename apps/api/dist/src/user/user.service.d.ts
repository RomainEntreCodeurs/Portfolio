import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, data: UpdateUserDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
