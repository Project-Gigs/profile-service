import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { UserSkill } from 'src/user-skill/entities/user-skill.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';

@Entity()
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn('increment', { name: 'skill_id', type: 'int' })
  @Field(() => Int)
  skillId: number;

  @Column({ name: 'skill_name' })
  @Field()
  skillName: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  deletedAat?: Date;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.skill, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @Field((_) => [UserSkill], { nullable: true })
  userSkills?: UserSkill[];

  @BeforeInsert()
  async beforeInsertOperation() {
    this.skillName = this.skillName.toLowerCase();
  }
}
