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

    async findAll() {
        return this.prisma.animal.findMany();
    }

    async update(id: number, data: AnimalDto) {
        const animal = await this.prisma.animal.findUnique({
            where: { id },
        });

        if (!animal) {
            throw new Error('Animal não encontrado');
        }
        await this.prisma.animal.update({
            where: { id },
            data,
        });
        return this.prisma.animal.findUnique({ where: { id } });
    }

    async delete(id: number) {
        const animal = await this.prisma.animal.findUnique({
            where: { id },
        });

        if (!animal) {
            throw new Error('Animal não encontrado');
        }

        return this.prisma.animal.delete({
            where: { id },
        });
    }
}
