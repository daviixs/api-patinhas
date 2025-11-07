import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdotanteDto } from 'src/dto/adotante.dto';
import { AdotanteService } from './adotante.service';

@Controller('adotante')
export class AdotanteController {
    constructor(private readonly adotanteService: AdotanteService) {}
    @Post()
    async createAdotante(@Body() data: AdotanteDto) {
        return this.adotanteService.asyncCreate(data);
    }

    @Get()
    async getAdotantes() {
        return this.adotanteService.asyncFindAll();
    }

    @Put(':id')
    async updateAdotante(@Body() data: AdotanteDto) {
        return this.adotanteService.asyncUpdate(data);
    }

    @Delete(':id')
    async deleteAdotante(@Param('id') id: string) {
        return this.adotanteService.asyncDelete(id);
    }
}
