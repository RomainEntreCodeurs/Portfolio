import { ProjectService } from './project.service';
import { CreateProjectDto, UpdateProjectDto } from "./dto/project.dto";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<{
        id: string;
        title: string;
        description: string;
        language: string;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        language: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        language: string;
    }>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        id: string;
        title: string;
        description: string;
        language: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        language: string;
    }>;
}
