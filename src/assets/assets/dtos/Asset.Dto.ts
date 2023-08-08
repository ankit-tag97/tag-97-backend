import { IsDateString, IsNumber, IsOptional, IsString, } from "class-validator";
import { Base } from "src/interface/base";

export class AssetDto extends Base {
    @IsString()
    name: string

    @IsNumber()
    modalNumber: number

    @IsDateString({ strict: true } as any)
    @IsOptional()
    purchaseDate: Date

    @IsString()
    description: string

    @IsNumber()
    warranty: number

    @IsNumber()
    @IsOptional()
    billNumber: number
}
