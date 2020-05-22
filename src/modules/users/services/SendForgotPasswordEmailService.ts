import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';
import IMailProvider from '@shared/container/providers/MailProvider/implementations/IMailProvider';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersRepository')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<User> {
    this.mailProvider.sendMail(
      email,
      'Pedido de recuperação de email recebido',
    );
  }
}

export default SendForgotPasswordEmailService;
