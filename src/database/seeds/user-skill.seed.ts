import { UserSkill } from 'src/user-skill/entities/user-skill.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as utils from '../../helpers/utils';

export default class CreateUserSkill implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await utils.default.readData(
      'src/database/seeds/data/user-skill.json',
    );
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserSkill)
      .values(data)
      .execute();
  }
}
