import { IsNotEmpty, Length, IsEmail, IsNumber } from 'class-validator';
import { IsCPF } from "class-validator-cpf";
import { ApiProperty } from '@nestjs/swagger';


export class CreateFuncionarioDto {
    @ApiProperty()  
    @IsNotEmpty({ message: 'Nome não pode ser vazio' })
    @Length(5, 35, { message: 'Nome precisa ter no mínimo 5 caracteres e no máximo 35' })
    nome: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'A data de nascimento não pode ser vazia' })
    dataNascimento: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O CPF não pode ser vazio' })
    @IsCPF({ message: "O CPF precisa ser válido" })
    cpf: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O sexo não pode ser vazio' })
    sexo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'O email não pode ser vazio' })
    @IsEmail(undefined, { message: 'O email precisa ser válido' })
    email: string;
}
