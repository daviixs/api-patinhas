import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdotanteDto } from 'src/dto/adotante.dto';
import { AdotanteService } from './adotante.service';

@ApiTags('adotante')
@Controller('adotante')
export class AdotanteController {
    constructor(private readonly adotanteService: AdotanteService) {}
    
    @Post()
    @ApiOperation({ summary: 'Criar um novo adotante' })
    @ApiResponse({ status: 201, description: 'Adotante criado com sucesso' })
    async createAdotante(@Body() data: AdotanteDto) {
        return this.adotanteService.asyncCreate(data);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os adotantes' })
    @ApiResponse({ status: 200, description: 'Lista de adotantes retornada com sucesso' })
    async getAdotantes() {
        return this.adotanteService.asyncFindAll();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um adotante' })
    @ApiResponse({ status: 200, description: 'Adotante atualizado com sucesso' })
    async updateAdotante(@Body() data: AdotanteDto) {
        return this.adotanteService.asyncUpdate(data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um adotante' })
    @ApiResponse({ status: 200, description: 'Adotante deletado com sucesso' })
    async deleteAdotante(@Param('id') id: string) {
        return this.adotanteService.asyncDelete(id);
    }
}
