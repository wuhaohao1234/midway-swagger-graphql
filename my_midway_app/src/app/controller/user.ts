import { Context, controller, get, inject, provide } from 'midway';
import { IUserService , IUserResultArr, IUserResult} from '../../interface';

@provide()
@controller('/user')
export class UserController {

  @inject()
  ctx: Context;

  @inject('userService')
  service: IUserService;

  @get('/getUser/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const user: IUserResult = await this.service.getUser({ id });
    this.ctx.body = user;
  }
  @get('/getAllUsers')
  async getAllUsers(): Promise<void> {
    const userArr: IUserResultArr = await this.service.getAllUsers();
    this.ctx.body = userArr;
  }
}
