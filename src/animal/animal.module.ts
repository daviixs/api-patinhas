import { Module } from '@nestjs/common';
import { CadastrarAnimalService } from 'src/cadastrar_animal/cadastrar_animal.service';
import { PrismaService } from 'src/database/prisma.service';
import { AnimalController } from './animal.controller';

@Module({
    providers: [CadastrarAnimalService, PrismaService],
    controllers: [AnimalController],
})
export class AnimalModule {}
