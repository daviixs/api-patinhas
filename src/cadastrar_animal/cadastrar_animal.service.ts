import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AnimalDto } from 'src/dto/animal.dto';

@Injectable()
export class CadastrarAnimalService {
    constructor(private prisma: PrismaService) {}
    async asynccreate(data: AnimalDto) {
        const animal = await this.prisma.animal.create({
            data,
        });

        return animal
    }
}
