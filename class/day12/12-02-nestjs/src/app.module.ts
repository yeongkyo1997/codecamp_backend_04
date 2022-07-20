import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // 주입될 컨트롤러
  providers: [AppService],  // 주입할 서비스를 정의
})
export class AppModule {}
