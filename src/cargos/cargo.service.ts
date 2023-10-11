import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private cargoRepository: Repository<Cargo>,
  ) {}
  findAll() {
    return this.cargoRepository.find()
  }
  findOne(id: number) {
    return this.cargoRepository.findOneBy({ id: id });
  }
}