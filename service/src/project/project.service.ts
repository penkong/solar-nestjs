import { Repository } from 'typeorm'
import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

// ---

import { Project } from './entities/project.entity'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'
import { plainToClass } from 'class-transformer'

// ---

class ItemJ {
  [key: string ] : number
}

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name)

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    // transactional
    try {
      return this.projectRepository.manager.transaction(async (trsM) => {
        // send requests to manufactor to book items

        // const product = trsM.getTreeRepository('product')
        // product.save({
        //   component: 'battery',
        //   model: 'x-s267-LES',
        //   manufactor: 'samsung'
        // })
        // await trsM.save()

        const existingProject = await trsM.findOne<Project>('Project', {
          where: {
            name: createProjectDto.name,
            construction_date: createProjectDto.construction_date
          }
        })

        if (existingProject) {
          throw new Error('Project already exists')
        } else {
          const project = trsM.create('Project', createProjectDto)
          return await trsM.save(project)
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  async findAll() {
    return await this.projectRepository.find()
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne({ where: { id } })
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      // input checking ...
      const project = await this.findOne(id)

      if (!project.id) throw new Error('Customer not found')
      // input checking ...
      return await this.projectRepository.save({
        ...project,
        ...updateProjectDto
      })
    } catch (error) {
      throw error.detail
    }
  }

  async remove(id: number) {
    return await this.projectRepository.delete(id)
  }
}
