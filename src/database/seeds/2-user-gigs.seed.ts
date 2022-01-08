import { UserGigs } from 'src/user-gigs/entities/user-gigs.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import data from './data/user-gigs.json';

export default class CreateUserGigs implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserGigs)
      .values(data as any)
      .execute();
  }
}
