import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

// ---

import { SolarInstallation } from './entities/solar-installation.entity'
import { CreateSolarInstallationDto } from './dto/create-solar-installation.dto'
import { UpdateSolarInstallationDto } from './dto/update-solar-installation.dto'

// ---

@Injectable()
export class SolarInstallationService {
  constructor(
    @InjectRepository(SolarInstallation)
    private solarRepository: Repository<SolarInstallation>
  ) {}

  create(createSolarInstallationDto: CreateSolarInstallationDto) {
    return 'This action adds a new solarInstallation'
  }

  findAll() {
    return `This action returns all solarInstallation`
  }

  findOne(id: number) {
    return `This action returns a #${id} solarInstallation`
  }

  update(id: number, updateSolarInstallationDto: UpdateSolarInstallationDto) {
    return `This action updates a #${id} solarInstallation`
  }

  remove(id: number) {
    return `This action removes a #${id} solarInstallation`
  }
}
