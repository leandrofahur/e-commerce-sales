import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('string')
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
