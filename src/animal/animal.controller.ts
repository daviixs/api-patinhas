import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CadastrarAnimalService } from 'src/cadastrar_animal/cadastrar_animal.service';
import type { AnimalDto } from 'src/dto/animal.dto';

@Controller('animal')
export class AnimalController {
    constructor(private readonly cadastrarAnimalService: CadastrarAnimalService) {}
    @Post()
    async createAnimal(@Body() data: AnimalDto) {
        return this.cadastrarAnimalService.asynccreate(data);
    }

    @Get()
    async findAll() {
        return this.cadastrarAnimalService.findAll();
    }

    @Put(':id')
    async updateAnimal(@Param('id') id: string, @Body() data: AnimalDto) {
        return this.cadastrarAnimalService.update(Number(id), data);
    }

    @Delete(':id')
    async deleteAnimal(@Param('id') id: string) {
        return this.cadastrarAnimalService.delete(Number(id));
    }
}