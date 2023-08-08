import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ClientDto } from 'src/client/dtos/client.dto';
import { ClientService } from 'src/client/service/client/client.service';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';
import { IdExceptionFilter } from 'src/exception/id-exception-filter';

@Controller('client')
@UseFilters(IdExceptionFilter)
export class ClientController {
  constructor(private clientService: ClientService) { }

  @Post()
  createClient(@Body() dto: ClientDto) {
    return this.clientService.createClients(dto);
  }

  @Get()
  getAllClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  async getClient(@Param('id') id: string) {
    try {
      const fetchClient = await this.clientService.getClient(id);
      if (fetchClient) return fetchClient;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Patch(':id')
  async updateClient(@Param('id') id: string, @Body() clientDto: ClientDto) {
    try {
      const updateClient = await this.clientService.updateClient(id, clientDto);
      if (updateClient) return updateClient;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Delete(':id')
  async deleteClient(@Param('id') id: string) {
    try {
      const removeClient = await this.clientService.deleteClient(id);
      if (removeClient) return removeClient;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }
}
