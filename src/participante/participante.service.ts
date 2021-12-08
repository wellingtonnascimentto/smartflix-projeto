import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { Participante } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ParticipanteService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createParticipanteDto: CreateParticipanteDto): Promise<Participante> {
    return await this.prisma.participante.create({
      data: { ...createParticipanteDto },
    });
  }

  async findAllPrisma(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOnePrisma(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: {id}});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  async updatePrisma(id: number, _updateParticipanteDto: UpdateParticipanteDto): Promise<Participante> {
    return  await this.prisma.participante.update({
      data:{..._updateParticipanteDto},
      where:{id}
  });
  }

  async removePrisma(id: number) {
    return await this.prisma.participante.delete({ where: {id}});
  }
}
