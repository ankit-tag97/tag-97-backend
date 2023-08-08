import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClientDto } from 'src/client/dtos/client.dto';
import { ErrorStatusCode } from 'src/enum/enum';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) { }

  async createClients(clientDto: ClientDto) {
    try {
      const client = await this.prisma.clients.create({
        data: clientDto
      })
      return client;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === ErrorStatusCode.P2Error) {
          return new HttpException('Credentials taken', HttpStatus.FORBIDDEN);
        }
      }
      throw error;
    }
  }

  getAllClients() {
    return this.prisma.clients.findMany({
      where: { deletedAt: null },
    });
  }

  getClient(id: string) {
    const where = { id: id, deletedAt: null };
    return this.prisma.clients.findFirst({ where: where });
  }

  updateClient(id: string, client: ClientDto) {
    return this.prisma.clients.update({ where: { id: id }, data: client });
  }

  deleteClient(id: string) {
    const deleteClient = { deletedAt: new Date() };
    return this.prisma.clients.update({
      where: { id: id },
      data: deleteClient,
    });
  }
}
