import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';
import { Skill } from 'src/skill/entities/skill.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserSkill {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'user_skill_id' })
  @Field(() => Int)
  userSkillId: number;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.userSkills, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @JoinColumn({ name: 'user_id' })
  @Field(() => UserProfile)
  userProfile: UserProfile;

  @ManyToOne(() => Skill, (skill) => skill.userSkills, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @JoinColumn({ name: 'skill_id' })
  @Field(() => Skill)
  skill: Skill;

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
