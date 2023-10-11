import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Importe a entidade aqui

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Certifique-se de importar a entidade no módulo
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}