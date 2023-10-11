import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { Repository } from 'typeorm';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';


@Injectable()
export class FuncionariosService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}
  create(createUserDto: CreateFuncionarioDto) {
    return this.funcionarioRepository.save(createUserDto);
  }
  update(id: number, updateUserDto: UpdateFuncionarioDto) {
    return this.funcionarioRepository.update(id, updateUserDto);
  }
  findAll() {
    return this.funcionarioRepository.find({
      relations: ['cargo']
    })
  }
  findOne(id: number) {
    return this.funcionarioRepository.findOneBy({ id: id });
  }
  remove(id: number) {
    return this.funcionarioRepository.delete(id);
  }
}