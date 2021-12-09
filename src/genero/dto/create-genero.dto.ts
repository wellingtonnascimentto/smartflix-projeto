/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  filmeid: number;
}
