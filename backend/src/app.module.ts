import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AppService } from './app.service';
import { GastoModule } from './gasto/gasto.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [GastoModule,
    MongooseModule.forRoot('mongodb+srv://dbriones:1234@base.ksmncfn.mongodb.net/Finanzas?retryWrites=true&w=majority'),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
