/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  id: number;
}

/**
 * @description User-Service response
 */
export interface IUserResult {
  id: number;
  username: string;
  phone: string;
  email?: string;
}
export type IUserResultArr = IUserResult[];
/**
 * @description User-Service abstractions
 */
export interface IUserService {
  getUser(options: IUserOptions): Promise<IUserResult>;
  getAllUsers(): Promise<IUserResultArr>;
}
