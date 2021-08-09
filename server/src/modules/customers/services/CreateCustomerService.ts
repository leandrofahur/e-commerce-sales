import { getCustomRepository } from 'typeorm';
import { CustomersRepository } from '../typeorm/repositories/CustomersRepository';
import { Customer } from '../typeorm/entities/Customer';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    // check another email with the same name:
    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already in use!');
    }

    const customer = customersRepository.create({ name, email });
    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
