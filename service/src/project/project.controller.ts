import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadGatewayException
} from '@nestjs/common'

// ---

import { ProjectService } from './project.service'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'
import { BadRequestException } from '@nestjs/common'

// ---

@Controller('v1/api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    try {
      return this.projectService.create(createProjectDto)
    } catch (error) {
      if (error.message == 'Project already exists') {
        throw new BadRequestException(error.message)
      } else throw new BadGatewayException(error)
    }
  }

  @Get()
  findAll() {
    try {
      return this.projectService.findAll()
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.projectService.findOne(+id)
    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    try {
      return this.projectService.update(+id, updateProjectDto)
    } catch (error) {
      throw error
    }
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.projectService.remove(+id)
    } catch (error) {
      throw error
    }
  }
}
