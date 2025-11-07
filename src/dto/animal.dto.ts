import { ApiProperty } from '@nestjs/swagger';

export class AnimalDto {
    @ApiProperty({ required: false, description: 'ID do animal (gerado automaticamente)' })
    id?: number;

    @ApiProperty({ description: 'Nome do animal' })
    nome: string;

    @ApiProperty({ required: false, description: 'Idade do animal' })
    idade?: number;

    @ApiProperty({ required: false, description: 'Tipo do animal (ex: cachorro, gato)' })
    tipo?: string;

    @ApiProperty({ required: false, description: 'Sexo do animal' })
    sexo?: string;

    @ApiProperty({ required: false, description: 'Data de resgate do animal' })
    data_resgate?: Date;

    @ApiProperty({ required: false, description: 'Canil onde o animal está' })
    canil?: string;
}
