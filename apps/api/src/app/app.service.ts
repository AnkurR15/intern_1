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
  /**
   * Retrieves a message from the API.
   * @returns An object containing the message.
   */
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  /**
   * Retrieves a list of users from the database.
   * @returns A promise that resolves to an array of UserDto objects.
   */
  async getUser(): Promise<UserDto[]> {
    const user: UserDto[] = await prisma.temp.findMany();
    return user;
  }

  /**
   * Creates a new user in the database.
   * @param data - An object containing the email and password of the user.
   * @returns A promise that resolves to the created user.
   * @throws HttpException if the user already exists.
   */
  async createUser(data: { email: string, password: string }): Promise<UserDto> {
    console.log(data);
    const tempUser = await prisma.temp.findFirst({
      where: {
        email: data.email
      }
    })
    if (tempUser) {
      throw new HttpException("user already exists", HttpStatus.BAD_REQUEST);
    }

    const user = await prisma.temp.create({
      data: data
    });
    return user;
    }
    
    
    //updating user method
    
    async updateUser(data : {email :string, password :string}){
      console.log(data);
      const tempuser = await prisma.temp.findFirst({
          where : {
            email : data.email
          }
        })
        if (tempuser){
          const updatedUser = await prisma.temp.update({
            where:{
              email : data.email
            },
            data : {
              password : data.password
            }
          })
          return updatedUser;
        }
        
      throw new HttpException("user not exist", HttpStatus.BAD_REQUEST);
        
    }
}
