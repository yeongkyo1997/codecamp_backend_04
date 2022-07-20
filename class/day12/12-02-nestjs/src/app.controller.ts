import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller() // 컨트롤러를 생성하는 인터페이스
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService
  }
  @Get('/boards')  // 함수
  getHello(): string {
    return this.appService.getHello(); // Get함수의 인자
  }
}
