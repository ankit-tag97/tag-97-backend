import { IsString } from 'class-validator';
import { Base } from 'src/interface/base';

export class RoleDto extends Base {
  @IsString()
  name: string;
}
