import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

import { UserTokensRepository } from '../typeorm/repositories/UserTokensRepository';
import AppError from '@shared/errors/AppError';
import { EtherealMail } from '@config/mail/EtherealMail';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UserRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Invalid credentials');
    }

    const token = await userTokensRepository.generate(user.id);

    // console.log(token);
    await EtherealMail.sendMail({
      to: email,
      body: `Token for password change: ${token?.token}`,
    });
  }
}

export default SendForgotPasswordEmailService;
