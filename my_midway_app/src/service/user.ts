import { provide } from 'midway';
import { IUserService, IUserResultArr, IUserOptions, IUserResult } from '../interface';

@provide('userService')
export class UserService implements IUserService {
  private userArr: IUserResultArr = [];
  async getUser(options: IUserOptions): Promise<IUserResult> {
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
  async getAllUsers(): Promise<IUserResultArr> {
    return this.userArr;
  }
}
