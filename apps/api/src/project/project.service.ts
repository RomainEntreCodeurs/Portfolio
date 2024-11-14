import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from "./dto/project.dto";

@Injectable()
export class ProjectService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProjectDto: CreateProjectDto) {
        const { title, description, language } = createProjectDto;

        return this.prisma.project.create({
            data: {
                title,
                description,
                language,
            },
        });
    }

    async findAll() {
        return this.prisma.project.findMany();
    }

    async findOne(id: string) {
        return this.prisma.project.findUnique({
            where: { id },
        });
    }

    async update(id: string, updateProjectDto: UpdateProjectDto) {
        return this.prisma.project.update({
            where: { id },
            data: {
                ...updateProjectDto,
            },
        });
    }

    async remove(id: string) {
        return this.prisma.project.delete({
            where: { id },
        });
    }
}
