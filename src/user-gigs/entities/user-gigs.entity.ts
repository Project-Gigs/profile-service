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
export class UserGigs {
  @PrimaryGeneratedColumn('uuid', { name: 'user_gigs_id' })
  @Field(() => ID)
  userGigsId: string;

  @Column('uuid', { name: 'contributor_user_id' })
  @Field(() => ID)
  contributorUserId: string;

  @Column('uuid', { name: 'gigs_id' })
  @Field(() => ID)
  gigsId: string;

  @Column({ default: false, name: 'is_in_gigs' })
  @Field()
  isInGigs: boolean;

  @Column('timestamp')
  @Field(() => GraphQLISODateTime)
  created_at: Timestamp;

  @Column('timestamp')
  @Field(() => GraphQLISODateTime)
  updated_at: Timestamp;

  @Column({ nullable: true, type: 'timestamp' })
  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn()
  deleted_at?: Timestamp;
}
