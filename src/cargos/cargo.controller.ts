import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargoService } from './cargo.service';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargoService: CargoService) {}

  @Get()
  findAll() {
    return this.cargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargoService.findOne(+id);
  }
}
