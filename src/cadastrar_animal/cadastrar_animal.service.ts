import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AnimalDto } from 'src/dto/animal.dto';

@Injectable()
export class CadastrarAnimalService {
    constructor(private prisma: PrismaService) {}
    async asynccreate(data: AnimalDto) {
        const animal = await (this.prisma as any).animal.create({
            data,
        });
        return animal
    }

    async findAll() {
        return (this.prisma as any).animal.findMany();
    }

    async update(id: number, data: AnimalDto) {
        const animal = await (this.prisma as any).animal.findUnique({
            where: { id },
        });

        if (!animal) {
            throw new Error('Animal não encontrado');
        }
        await (this.prisma as any).animal.update({
            where: { id },
            data,
        });
        return (this.prisma as any).animal.findUnique({ where: { id } });
    }

    async delete(id: number) {
        const animal = await (this.prisma as any).animal.findUnique({
            where: { id },
        });

        if (!animal) {
            throw new Error('Animal não encontrado');
        }

        return (this.prisma as any).animal.delete({
            where: { id },
        });
    }
}
