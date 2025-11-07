import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CadastrarAnimalService } from 'src/cadastrar_animal/cadastrar_animal.service';
import { AnimalDto } from 'src/dto/animal.dto';

@ApiTags('animal')
@Controller('animal')
export class AnimalController {
    constructor(private readonly cadastrarAnimalService: CadastrarAnimalService) {}
    
    @Post()
    @ApiOperation({ summary: 'Criar um novo animal' })
    @ApiResponse({ status: 201, description: 'Animal criado com sucesso' })
    async createAnimal(@Body() data: AnimalDto) {
        return this.cadastrarAnimalService.asynccreate(data);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os animais' })
    @ApiResponse({ status: 200, description: 'Lista de animais retornada com sucesso' })
    async findAll() {
        return this.cadastrarAnimalService.findAll();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um animal' })
    @ApiResponse({ status: 200, description: 'Animal atualizado com sucesso' })
    async updateAnimal(@Param('id') id: string, @Body() data: AnimalDto) {
        return this.cadastrarAnimalService.update(Number(id), data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um animal' })
    @ApiResponse({ status: 200, description: 'Animal deletado com sucesso' })
    async deleteAnimal(@Param('id') id: string) {
        return this.cadastrarAnimalService.delete(Number(id));
    }
}