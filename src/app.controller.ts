import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  async getData(@Query('matricula') matricula: string) {
    const data = await this.appService.EatApiDocente(matricula);
    return data;
  }
}
