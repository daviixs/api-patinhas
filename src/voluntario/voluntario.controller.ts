import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VoluntarioDto } from 'src/dto/voluntario.dto';
import { VoluntarioService } from './voluntario.service';

@Controller('voluntario')
export class VoluntarioController {
    constructor(private readonly voluntarioService: VoluntarioService) {}
    @Post()
    async createVoluntario(@Body() data: VoluntarioDto) {
        return this.voluntarioService.asyncCreate(data);
    }

    @Get()
    async getVoluntarios() {
        return this.voluntarioService.asyncFindAll();
    }

    @Put(':id')
    async updateVoluntario(@Body() data: VoluntarioDto) {
        return this.voluntarioService.asyncUpdate(data);
    }

    @Delete(':id')
    async deleteVoluntario(@Param('id') id: string) {
        return this.voluntarioService.asyncDelete(id);
    }
}
