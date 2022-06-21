import { Repository } from 'typeorm'
import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

// ---

import { Project } from './entities/project.entity'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'

// ---

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name)

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project'
  }

  findAll() {
    return `This action returns all project`
  }

  findOne(id: number) {
    return `This action returns a #${id} project`
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`
  }

  remove(id: number) {
    return `This action removes a #${id} project`
  }
}
