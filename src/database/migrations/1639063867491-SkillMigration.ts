import {MigrationInterface, QueryRunner} from "typeorm";

export class SkillMigration1639063867491 implements MigrationInterface {
    name = 'SkillMigration1639063867491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "skill" ("skill_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "skill_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_9ad49f5c60b5cfd0c7bd4fe87a4" PRIMARY KEY ("skill_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "skill"`);
    }

}
