import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
const bcrypt = require('bcrypt');

@Entity()
@ObjectType()
export class UserProfile {
  @PrimaryGeneratedColumn()
  @Field((_) => Int)
  user_id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  name: string;

  @Column('text')
  @Field({ nullable: true })
  bio: string;

  @Column()
  @Field({ nullable: true })
  slug: string;

  @Column()
  @Field({ nullable: true })
  social_media_url?: string;

  @Column()
  @Field({ nullable: true })
  portfolio_url?: string;

  @Column()
  @Field({ nullable: true })
  profile_image_url?: string;

  @Column()
  @Field({ nullable: true })
  card_showoff_url?: string;

  @Column('timestamptz')
  @Field((_) => GraphQLISODateTime)
  created_at: Date;

  @Column('timestamptz')
  @Field((_) => GraphQLISODateTime)
  updated_at: Date;

  @Column({ nullable: true, type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn()
  deleted_at?: Date;

  @BeforeInsert()
  async hashPassword(password: string) {
    this.password = await bcrypt.hash(password || this.password, 10);
  }
}
