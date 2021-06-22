import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import { Product } from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product does not exist in the database');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
