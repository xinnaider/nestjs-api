import { Cargo } from 'src/cargos/entities/cargo.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  dataNascimento: string;

  @Column()
  cpf: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @ManyToOne(() => Cargo)
  @JoinColumn()
    cargo: Cargo;
}