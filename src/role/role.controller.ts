import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { DataNotFoundException } from 'src/exception/dataNotFoundException';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('/createRole')
  createRole(@Body(ValidationPipe) dto: RoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get('/getRoles')
  async getAllRole() {
    try {
      const findAllRoles = await this.roleService.getRoles();
      if (findAllRoles) return findAllRoles;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Get(':id')
  async getRole(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const findRoles = await this.roleService.getRole(id);
      if (findRoles) return findRoles;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Patch(':id')
  async updateRole(@Param('id') id: string, @Body() roleDto: RoleDto) {
    try {
      const updateRole = await this.roleService.updateRole(id, roleDto);
      if (updateRole) return updateRole;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: string) {
    try {
      const deleleRole = await this.roleService.deteleRole(id);
      if (deleleRole) return deleleRole;
      return new DataNotFoundException();
    } catch {
      throw new DataNotFoundException();
    }
  }
}
