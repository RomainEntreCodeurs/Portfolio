import {Controller, Get, Post, Body, Param, Put, Delete, UseGuards} from '@nestjs/common';
import { ProjectService } from './project.service';
import {CreateProjectDto, UpdateProjectDto} from "./dto/project.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.create(createProjectDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.projectService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.projectService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectService.update(id, updateProjectDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.projectService.remove(id);
    }
}
