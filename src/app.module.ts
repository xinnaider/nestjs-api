import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './ormconfig';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { CargosModule } from './cargos/cargos.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), FuncionariosModule, CargosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
