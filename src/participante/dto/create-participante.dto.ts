/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateParticipanteDto {

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string; 
  
  @IsNotEmpty()
  filmeid: number;
}
