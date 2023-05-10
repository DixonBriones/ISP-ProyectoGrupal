import { Module } from '@nestjs/common';
import { GastoController } from './gasto.controller';
import { GastoService } from './gasto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GastoSchema } from './schemas/gasto.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:"Gasto", schema: GastoSchema}
    ])
  ],
  controllers: [GastoController],
  providers: [GastoService]
})
export class GastoModule {}
