import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('new-cat')
  createCat(@Req() req): any {
    console.log('adasasaS', req.body);
    return this.appService.createCat(req);
  }
}
