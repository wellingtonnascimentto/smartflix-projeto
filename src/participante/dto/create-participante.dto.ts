/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_nascimento: string;

  @IsNotEmpty()
  @IsString()
  ator1_ou_staff2: string;

  
  @IsNotEmpty()
  filmeid: number;
}
