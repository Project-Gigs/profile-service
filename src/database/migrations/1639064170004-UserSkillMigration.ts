import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSkillMigration1639064170004 implements MigrationInterface {
    name = 'UserSkillMigration1639064170004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_skill" ("user_skill_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "skill_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_2ecc95008bebe198b9990574c2a" PRIMARY KEY ("user_skill_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_skill"`);
    }

}
