import { Skill } from 'src/skill/entities/skill.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import data from './data/skill.json';

export default class CreateSkill implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Skill)
      .values(data)
      .execute();
  }
}
