import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrarAnimalService } from './cadastrar_animal/cadastrar_animal.service';
import { AnimalController } from './animal/animal.controller';
import { AnimalModule } from './animal/animal.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [AnimalModule],
  controllers: [AppController, AnimalController],
  providers: [AppService, CadastrarAnimalService, PrismaService],
})
export class AppModule {}
