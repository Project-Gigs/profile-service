import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  @Field((_) => ID)
  user_id: string;

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

  @Column('timestamp')
  @Field((_) => GraphQLISODateTime)
  created_at: Timestamp;

  @Column('timestamp')
  @Field((_) => GraphQLISODateTime)
  updated_at: Timestamp;

  @Column({ nullable: true, type: 'timestamp' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn()
  deleted_at?: Timestamp;
}
