import { Exclude, Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class Base {
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Exclude()
  updatedAt: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Exclude()
  deletedAt: Date;
}
