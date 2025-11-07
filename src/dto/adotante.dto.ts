import { ApiProperty } from '@nestjs/swagger';

export class AdotanteDto {
    @ApiProperty({ required: false, description: 'ID do adotante (gerado automaticamente)' })
    id?: number;

    @ApiProperty({ description: 'Nome do adotante' })
    nome: string;

    @ApiProperty({ required: false, description: 'Endereço do adotante' })
    endereco?: string;

    @ApiProperty({ required: false, description: 'Telefone do adotante' })
    telefone?: string;

    @ApiProperty({ required: false, description: 'CEP do adotante' })
    cep?: string;

    @ApiProperty({ description: 'Email do adotante' })
    email: string;
}