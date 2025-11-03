import { Body, Controller, Post } from '@nestjs/common';
import { CadastrarAnimalService } from 'src/cadastrar_animal/cadastrar_animal.service';
import type { AnimalDto } from 'src/dto/animal.dto';

@Controller('animal')
export class AnimalController {
    constructor(private readonly cadastrarAnimalService: CadastrarAnimalService) {}
    @Post()
    async createAnimal(@Body() data: AnimalDto) {
        return this.cadastrarAnimalService.asynccreate(data);
    }
}