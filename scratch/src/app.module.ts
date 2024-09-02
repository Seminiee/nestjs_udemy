import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
@Module({
    controllers: [AppController]
}) //설정 옵션 혹은 객체를 넣어줘야 함
export class AppModule {

}