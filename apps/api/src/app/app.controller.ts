import { Controller, Get, Post ,Body,Patch, Delete,Param} from '@nestjs/common';

import { AppService } from './app.service';


/**
 * Controller responsible for handling API requests related to the app.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Retrieves data from the app service.
   * @returns The data retrieved from the app service.
   */
  @Get()
  getData() {
    return this.appService.getData();
  }

  /**
   * Retrieves user data from the app service.
   * @returns The user data retrieved from the app service.
   */
  @Get('/users') 
  getUser(){
    return this.appService.getUser();
  }

  /**
   * Creates a new user using the provided data.
   * @param data - The data required to create a new user (email and password).
   * @returns The created user.
   */
  @Post('/create-user')
  createUser(@Body() data: {email: string, password: string}) {
    // implementation goes here
    return this.appService.createUser(data);
  }
  @Patch('/update-user')
  updateUser(@Body() data: {email : string, password :string}){
    return this.appService.updateUser(data)
  }

  @Delete('/delete-user/:id')
  deleteUser(@Param('id') id:number){
    return this.appService.deleteUser(+id)
  }
}


