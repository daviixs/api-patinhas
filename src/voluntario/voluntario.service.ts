import { Injectable } from '@nestjs/common';
import { VoluntarioDto } from 'src/dto/voluntario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class VoluntarioService {
    constructor(private readonly prisma: PrismaService) {}
    
    async asyncCreate(data: VoluntarioDto) {
        const { id, ...dataWithoutId } = data;
        const voluntario = await this.prisma.voluntario.create({
            data: dataWithoutId,
        });
        return voluntario;
    }

    async asyncFindAll() {
        return this.prisma.voluntario.findMany();
    }

    async asyncUpdate(data: VoluntarioDto) {
        if (!data.id) {
            throw new Error('ID é obrigatório para atualização');
        }

        const voluntario = await this.prisma.voluntario.findUnique({
            where: { id: data.id },
        }); 

        if (!voluntario) {
            throw new Error('Voluntario não encontrado');
        }
        
        const { id, ...dataWithoutId } = data;
        await this.prisma.voluntario.update({
            where: { id: data.id },
            data: dataWithoutId,
        });

        return this.prisma.voluntario.findUnique({ where: { id: data.id } });
    }

    async asyncDelete(id: string) {
        const voluntarioId = parseInt(id, 10);
        
        if (isNaN(voluntarioId)) {
            throw new Error('ID inválido');
        }

        const voluntario = await this.prisma.voluntario.findUnique({
            where: { id: voluntarioId },
        });

        if (!voluntario) {
            throw new Error('Voluntario não encontrado');
        }

        return this.prisma.voluntario.delete({
            where: { id: voluntarioId },
        });
    }
}