import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSkillMigration1639309204687 implements MigrationInterface {
    name = 'UserSkillMigration1639309204687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_profile" ("user_id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "bio" text NOT NULL, "slug" character varying NOT NULL, "social_media_url" character varying NOT NULL, "portfolio_url" character varying NOT NULL, "profile_image_url" character varying NOT NULL, "card_showoff_url" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_eee360f3bff24af1b6890765201" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e336cc51b61c40b1b1731308aa" ON "user_profile" ("email") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_4bf172f57267d264183fb37cfa" ON "user_profile" ("slug") `);
        await queryRunner.query(`CREATE TABLE "user_skill" ("user_skill_id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "user_id" integer, "skill_id" integer, CONSTRAINT "PK_2ecc95008bebe198b9990574c2a" PRIMARY KEY ("user_skill_id"))`);
        await queryRunner.query(`CREATE TABLE "skill" ("skill_id" SERIAL NOT NULL, "skill_name" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_9ad49f5c60b5cfd0c7bd4fe87a4" PRIMARY KEY ("skill_id"))`);
        await queryRunner.query(`ALTER TABLE "user_skill" ADD CONSTRAINT "FK_e4ba866607554d86dc9c2a6c0e3" FOREIGN KEY ("user_id") REFERENCES "user_profile"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_skill" ADD CONSTRAINT "FK_215460dc28b2f3cb6507c315eb3" FOREIGN KEY ("skill_id") REFERENCES "skill"("skill_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_skill" DROP CONSTRAINT "FK_215460dc28b2f3cb6507c315eb3"`);
        await queryRunner.query(`ALTER TABLE "user_skill" DROP CONSTRAINT "FK_e4ba866607554d86dc9c2a6c0e3"`);
        await queryRunner.query(`DROP TABLE "skill"`);
        await queryRunner.query(`DROP TABLE "user_skill"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4bf172f57267d264183fb37cfa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e336cc51b61c40b1b1731308aa"`);
        await queryRunner.query(`DROP TABLE "user_profile"`);
    }

}
