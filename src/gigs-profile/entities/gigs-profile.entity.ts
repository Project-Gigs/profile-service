import { ObjectType, Field, GraphQLISODateTime, ID } from '@nestjs/graphql';
import slugify from 'slugify';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@ObjectType()
export class GigsProfile {
  @PrimaryGeneratedColumn('uuid', { name: 'gigs_id' })
  @Field(() => ID)
  gigs_id: string;

  @Column('timestamp', { name: 'start_datetime' })
  @Field()
  startDatetime: Timestamp;

  @Column('timestamp', { name: 'finish_datetime' })
  @Field({ nullable: true })
  finishDatetime?: Timestamp;

  @Column('string', { name: 'gigs_name' })
  @Field()
  gigsName: string;

  @Column('string', { name: 'gigs_slug' })
  @Index({ unique: true })
  gigsSlug: string;

  @Column('boolean', { name: 'preview_link' })
  @Field()
  previewLink: boolean;

  @Column('string', { name: 'description' })
  @Field()
  description: string;

  @Column('string', { name: 'requirement' })
  @Field()
  requirement: string;

  @Column('int', { name: 'max_member' })
  @Field()
  maxMember: number;

  @Column('boolean', { name: 'is_deleted' })
  @Field()
  isDeleted: boolean;

  @OneToMany(() => UserProfile, (UserProfile) => UserProfile.user_id)
  @Field()
  ownerUserId: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  created_at: Timestamp;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  @Field(() => GraphQLISODateTime)
  updated_at: Timestamp;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true, type: 'timestamptz' })
  @Field((_) => GraphQLISODateTime, { nullable: true })
  deleted_at?: Timestamp;

  @BeforeInsert()
  createGigsSlug() {
    this.gigsSlug = slugify(
      this.gigsName + ' ' + (Math.floor(Math.random() * 90000) + 10000),
      { lower: true },
    );
  }
}
