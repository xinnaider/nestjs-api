import { Funcionario } from 'src/funcionarios/entities/funcionario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.cargo)
  funcionario: Funcionario[]
}