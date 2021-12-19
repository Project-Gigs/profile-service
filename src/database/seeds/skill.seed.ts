import { Skill } from 'src/skill/entities/skill.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as utils from '../../helpers/utils';

export default class CreateSkill implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await utils.default.readData(
      'src/database/seeds/data/skill.json',
    );
    console.log(data[0]);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Skill)
      .values(data)
      .execute();
  }
}
