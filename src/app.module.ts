import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
	imports: [
		//ConfigModule.forRoot(),
		MongooseModule.forRoot('mongodb://localhost/test'), 
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule { }
