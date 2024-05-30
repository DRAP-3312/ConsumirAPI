import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async EatApiDocente(matricula: string): Promise<any> {
    const url = `http://localhost:5000/api/v1/student/teacher?matricula=${matricula}`; 
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
