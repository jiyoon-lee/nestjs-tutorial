import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT }) // 인젝션 스코프 => 싱글톤으로 할래?
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
