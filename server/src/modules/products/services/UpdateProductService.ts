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

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product does not exist in the database');
    }

    // check another product with the same name:
    const productExist = await productsRepository.findByName(name);

    if (productExist) {
      throw new AppError('Product already exists in the database');
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
