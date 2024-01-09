import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { HttpException, HttpStatus } from '@nestjs/common';

const prisma = new PrismaClient()


class UserDto{
  email: string;
  password: string;
}

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getUser(){
    const user : UserDto[]= await prisma.temp.findMany();
    return user;
  }

  async createUser(data: {email: string, password: string}){
    console.log(data);
    const tempUser = await prisma.temp.findFirst({
      where:{
        email: data.email
      }
    })
    if(tempUser){
      throw new HttpException("user already exists",HttpStatus.BAD_REQUEST);
    }

    const user = await prisma.temp.create({
      data: data
    });
    return user;
  } 
}
