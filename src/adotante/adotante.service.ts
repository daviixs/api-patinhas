import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AdotanteDto } from 'src/dto/adotante.dto';

@Injectable()
export class AdotanteService {
   constructor(private prisma: PrismaService) {}
    async asyncCreate(data: AdotanteDto) {
        const { id, ...dataWithoutId } = data;
        const adotante = await this.prisma.adotante.create({
            data: dataWithoutId,
        });
        return adotante;
    }

    async asyncFindAll() {
        return this.prisma.adotante.findMany();
    }

    async asyncUpdate(data: AdotanteDto) {
        if (!data.id) {
            throw new Error('ID é obrigatório para atualização');
        }

        const adotante = await this.prisma.adotante.findUnique({
            where: { id: data.id },
        });
    
        if (!adotante) {
            throw new Error('Adotante não encontrado');
        }
        
        const { id, ...dataWithoutId } = data;
        await this.prisma.adotante.update({
            where: { id: data.id },
            data: dataWithoutId,
        });
        
        return this.prisma.adotante.findUnique({ where: { id: data.id } });
    }

    async asyncDelete(id: string) {
        const adotanteId = parseInt(id, 10);
        
        if (isNaN(adotanteId)) {
            throw new Error('ID inválido');
        }

        const adotante = await this.prisma.adotante.findUnique({
            where: { id: adotanteId },
        });

        if (!adotante) {
            throw new Error('Adotante não encontrado');
        }

        return this.prisma.adotante.delete({
            where: { id: adotanteId },
        });
    }
}
