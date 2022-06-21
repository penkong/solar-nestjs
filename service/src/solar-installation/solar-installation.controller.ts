import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolarInstallationService } from './solar-installation.service';
import { CreateSolarInstallationDto } from './dto/create-solar-installation.dto';
import { UpdateSolarInstallationDto } from './dto/update-solar-installation.dto';

@Controller('v1/api/solar-installation')
export class SolarInstallationController {
  constructor(private readonly solarInstallationService: SolarInstallationService) {}

  @Post()
  create(@Body() createSolarInstallationDto: CreateSolarInstallationDto) {
    return this.solarInstallationService.create(createSolarInstallationDto);
  }

  @Get()
  findAll() {
    return this.solarInstallationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solarInstallationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolarInstallationDto: UpdateSolarInstallationDto) {
    return this.solarInstallationService.update(+id, updateSolarInstallationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solarInstallationService.remove(+id);
  }
}
