import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './database/app.module';
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { Config } from './config/config'


async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.use(cors())
	app.use(bodyParser.json({ limit: '50MB' }));
	await app.listen(Config.port);
}
bootstrap();
