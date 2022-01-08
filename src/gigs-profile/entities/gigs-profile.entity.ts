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
} from 'typeorm';

@ObjectType()
export class GigsProfile {
  @PrimaryGeneratedColumn('increment', { name: 'gigs_id', type: 'int' })
  @Field(() => Int)
  gigsId: string;

  @Column('string', { name: 'gigs_name' })
  @Field()
  name: string;

  @Column('string', { name: 'slug' })
  @Index({ unique: true })
  @Field()
  slug: string;

  @Column('text', { name: 'description' })
  @Field()
  description: Text;

  @Column('string', { name: 'preview_url' })
  @Field()
  previewUrl: string;

  @Column('text', { name: 'requirement' })
  @Field()
  requirement: string;

  @Column('int', { name: 'max_member' })
  @Field()
  maxMember: number;

  @Column({ name: 'start_datetime', type: 'timestamptz' })
  @Field()
  startDatetime: Date;

  @Column({ name: 'finish_datetime' })
  @Field({ nullable: true })
  finishDatetime?: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  deleted_at?: Date;

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
