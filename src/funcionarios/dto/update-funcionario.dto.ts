import { CreateFuncionarioDto } from './create-funcionario.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {}
