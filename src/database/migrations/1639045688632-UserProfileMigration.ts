import {MigrationInterface, QueryRunner} from "typeorm";

export class UserProfileMigration1639045688632 implements MigrationInterface {
    name = 'UserProfileMigration1639045688632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profile" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "bio" text NOT NULL, "slug" character varying NOT NULL, "social_media_url" character varying NOT NULL, "portfolio_url" character varying NOT NULL, "profile_image_url" character varying NOT NULL, "card_showoff_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_eee360f3bff24af1b6890765201" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_profile"`);
    }

}
