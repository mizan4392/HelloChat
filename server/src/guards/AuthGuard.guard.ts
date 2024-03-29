import {
  Injectable,
  CanActivate,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { User } from 'src/user/schema/User.Schema';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token) {
      const parts = token.split(' ');

      if (parts?.length === 2) {
        const jwt = parts[1];

        const user = this.jwtService.decode(jwt);
        request.user = user;
        return true;
      }
    }

    return false;
  }
}

const CurrentUserDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as User;
    return user;
  },
);

export const CurrentUser = () => CurrentUserDecorator();
