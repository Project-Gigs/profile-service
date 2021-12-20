import { UserSkill } from 'src/user-skill/entities/user-skill.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import data from './data/user-skill.json';

export default class CreateUserSkill implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserSkill)
      .values(data as any)
      .execute();
  }
}
