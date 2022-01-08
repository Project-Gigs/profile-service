import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';
import slugify from 'slugify';
import { UserGigs } from 'src/user-gigs/entities/user-gigs.entity';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Entity,
} from 'typeorm';

@Entity()
@ObjectType()
export class GigsProfile {
  @PrimaryGeneratedColumn('increment', { name: 'gigs_id', type: 'int' })
  @Field(() => Int)
  gigsId: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Index({ unique: true })
  @Field()
  slug: string;

  @Column({ name: 'description', type: 'text' })
  @Field()
  description: string;

  @Column({ name: 'preview_url' })
  @Field()
  previewUrl: string;

  @Column({ name: 'requirement' })
  @Field()
  requirement: string;

  @Column({ name: 'max_member', type: 'int' })
  @Field()
  maxMember: number;

  @Column({ name: 'start_datetime', type: 'timestamptz' })
  @Field()
  startDateTime: Date;

  @Column({ name: 'finish_datetime' })
  @Field({ nullable: true })
  finishDateTime?: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;

  @OneToMany(() => UserGigs, (userGigs) => userGigs.gigsProfile, {
    cascade: ['insert', 'update', 'soft-remove', 'recover'],
  })
  @Field((_) => [UserGigs], { nullable: true })
  userGigs: UserGigs[];

  @BeforeInsert()
  createGigsSlug() {
    this.slug = slugify(
      this.name + ' ' + (Math.floor(Math.random() * 90000) + 10000),
      { lower: true },
    );
  }
}
