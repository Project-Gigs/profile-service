import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { GigsProfile } from 'src/gigs-profile/entities/gigs-profile.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserGigs {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'user_gigs_id' })
  @Field(() => Int)
  userGigsId: number;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.userGigs, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @JoinColumn({ name: 'user_id' })
  @Field(() => UserProfile)
  userProfile: UserProfile;

  @ManyToOne(() => GigsProfile, (gigsProfile) => gigsProfile.userGigs, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @JoinColumn({ name: 'gigs_id' })
  @Field(() => GigsProfile)
  gigsProfile: GigsProfile;

  @Column({ default: false, name: 'is_in_gigs' })
  @Field()
  isInGigs: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  deletedAt?: Date;
}
