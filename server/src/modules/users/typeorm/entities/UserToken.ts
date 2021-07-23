import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Generated,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('user_tokens')
export class UserToken extends BaseEntity {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    super();
    if (!this.id && !this.token) {
      this.id = uuid();
      this.token = uuid();
    }
  }
}
