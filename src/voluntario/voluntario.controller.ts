import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VoluntarioDto } from 'src/dto/voluntario.dto';
import { VoluntarioService } from './voluntario.service';

@ApiTags('voluntario')
@Controller('voluntario')
export class VoluntarioController {
    constructor(private readonly voluntarioService: VoluntarioService) {}
    
    @Post()
    @ApiOperation({ summary: 'Criar um novo voluntário' })
    @ApiResponse({ status: 201, description: 'Voluntário criado com sucesso' })
    async createVoluntario(@Body() data: VoluntarioDto) {
        return this.voluntarioService.asyncCreate(data);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os voluntários' })
    @ApiResponse({ status: 200, description: 'Lista de voluntários retornada com sucesso' })
    async getVoluntarios() {
        return this.voluntarioService.asyncFindAll();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um voluntário' })
    @ApiResponse({ status: 200, description: 'Voluntário atualizado com sucesso' })
    async updateVoluntario(@Body() data: VoluntarioDto) {
        return this.voluntarioService.asyncUpdate(data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um voluntário' })
    @ApiResponse({ status: 200, description: 'Voluntário deletado com sucesso' })
    async deleteVoluntario(@Param('id') id: string) {
        return this.voluntarioService.asyncDelete(id);
    }
}

