import {MigrationInterface, QueryRunner} from "typeorm";

export class UserGigsMigration1639062836337 implements MigrationInterface {
    name = 'UserGigsMigration1639062836337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_gigs" ("user_gigs_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "contributor_user_id" uuid NOT NULL, "gigs_id" uuid NOT NULL, "is_in_gigs" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_48526d2478a750fd8ef18c461ab" PRIMARY KEY ("user_gigs_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_gigs"`);
    }

}
