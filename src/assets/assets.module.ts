import { Module } from "@nestjs/common";
import { AssetService } from "./assets/service/asset.service";
import { AssetController } from "./assets/coontroller/asset.controller";

@Module({
  controllers: [AssetController],
  providers: [AssetService]
})
export class AssetsModule { }
