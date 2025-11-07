import { ApiProperty } from '@nestjs/swagger';

export class VoluntarioDto {
    @ApiProperty({ required: false, description: 'ID do voluntário (gerado automaticamente)' })
    id?: number;

    @ApiProperty({ description: 'Nome do voluntário' })
    nome: string;

    @ApiProperty({ required: false, description: 'Telefone do voluntário' })
    telefone?: string;

    @ApiProperty({ description: 'Senha do voluntário' })
    senha: string;

    @ApiProperty({ description: 'Nome de usuário do voluntário' })
    usuario: string;
}