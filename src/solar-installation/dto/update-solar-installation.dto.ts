import { PartialType } from '@nestjs/mapped-types';
import { CreateSolarInstallationDto } from './create-solar-installation.dto';

export class UpdateSolarInstallationDto extends PartialType(CreateSolarInstallationDto) {}
