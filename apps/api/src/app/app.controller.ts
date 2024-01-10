import { Controller, Get, Post ,Body, Patch} from '@nestjs/common';

import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/users') 
  getUser(){
    return this.appService.getUser();
  }

  @Post('/create-user')
  createUser(@Body() data: {email: string, password: string}) {
    // implementation goes here
    return this.appService.createUser(data);
  }
  @Patch('/update-user')
  updateUser(@Body() data: {email: string, password: string}) {
    return this.appService.updateUser(data);
  }
  
}


