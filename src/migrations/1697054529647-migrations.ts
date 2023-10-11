import { Cargo } from "src/cargos/entities/cargo.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class Migrations1697054529647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<Cargo>(Cargo, {
              nome: 'Administrador'
            }),
            
          );

        await queryRunner.manager.save(
        queryRunner.manager.create<Cargo>(Cargo, {
            nome: 'Ajudante'
        }),
        
        );

        await queryRunner.manager.save(
        queryRunner.manager.create<Cargo>(Cargo, {
            nome: 'Moderador'
        }),
        
        );
          
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
