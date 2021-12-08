import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('participante')
export class ParticipanteController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly participanteService: ParticipanteService) {}

  @Post()
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participanteService.createPrisma(createParticipanteDto);
  }

  @Get()
  findAll() {
    return this.participanteService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participanteService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipanteDto: UpdateParticipanteDto) {
    return this.participanteService.updatePrisma(+id, updateParticipanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participanteService.removePrisma(+id);
  }
}
