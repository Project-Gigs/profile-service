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
export class Skill {
  @PrimaryGeneratedColumn('uuid', { name: 'skill_id' })
  @Field(() => ID)
  skillId: string;

  @Column({ name: 'skill_name' })
  @Field()
  skillName: string;

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
