/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateFilmeDto {

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: string;

  @IsNotEmpty()
  tempo_duracao: number;  
}
