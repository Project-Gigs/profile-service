import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { GigsProfile } from 'src/gigs-profile/entities/gigs-profile.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserGigs {
  @PrimaryGeneratedColumn('uuid', { name: 'user_gigs_id' })
  @Field(() => ID)
  userGigsId: string;

  @ManyToOne(() => UserProfile, (UserProfile) => UserProfile.userId)
  @Field()
  contributorUserId: string;

  @ManyToOne(() => GigsProfile, (GigsProfile) => GigsProfile.gigsId)
  @Field()
  gigsId: string;

  @Column({ default: false, name: 'is_in_gigs' })
  @Field()
  isInGigs: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  created_at: Timestamp;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updated_at: Timestamp;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  deleted_at?: Timestamp;
}
