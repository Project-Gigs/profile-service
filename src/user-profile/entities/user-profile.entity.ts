import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';
import { UserSkill } from 'src/user-skill/entities/user-skill.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import utils from '../../helpers/utils';

@Entity()
@ObjectType()
export class UserProfile {
  @PrimaryGeneratedColumn('increment', { name: 'user_id', type: 'int' })
  @Field((_) => Int)
  userId: number;

  @Column()
  @Index({ unique: true })
  @Field()
  email: string;

  @Column({ select: false })
  @Field()
  password: string;

  @Column()
  @Field()
  name: string;

  @Column('text')
  @Field({ nullable: true })
  bio: string;

  @Column()
  @Index({ unique: true })
  slug: string;

  @Column({ name: 'social_media_url' })
  @Field({ nullable: true })
  socialMediaUrl?: string;

  @Column({ name: 'portfolio_url' })
  @Field({ nullable: true })
  portfolioUrl?: string;

  @Column({ name: 'profile_image_url' })
  @Field({ nullable: true })
  profileImageUrl?: string;

  @Column({ name: 'card_showoff_url' })
  @Field({ nullable: true })
  cardShowoffUrl?: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime)
  updatedAt: Date;

  @Field((_) => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  deletedAt?: Date;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.userProfile, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @Field((_) => [UserSkill], { nullable: true })
  userSkills?: UserSkill[];

  @BeforeInsert()
  async beforeInsertOperation() {
    this.password = await utils.hashPassword(this.password);
    this.slug = await utils.slugifyName(this.name);
  }
}
