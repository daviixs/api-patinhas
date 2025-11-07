import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrarAnimalService } from './cadastrar_animal/cadastrar_animal.service';
import { AnimalController } from './animal/animal.controller';
import { AnimalModule } from './animal/animal.module';
import { PrismaService } from './database/prisma.service';
import { AdotanteController } from './adotante/adotante.controller';
import { AdotanteService } from './adotante/adotante.service';
import { VoluntarioController } from './voluntario/voluntario.controller';
import { VoluntarioService } from './voluntario/voluntario.service';

@Module({
  imports: [AnimalModule],
  controllers: [AppController, AnimalController, AdotanteController, VoluntarioController],
  providers: [AppService, CadastrarAnimalService, PrismaService, AdotanteService, VoluntarioService],
})
export class AppModule {}
