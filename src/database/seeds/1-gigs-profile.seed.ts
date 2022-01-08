import { GigsProfile } from 'src/gigs-profile/entities/gigs-profile.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import utils from 'src/helpers/utils';
import data from './data/gigs-profile.json';

export default class CreateGigsProfile implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const processedData = await Promise.all(
      (data as unknown as GigsProfile[]).map(async (d) => {
        return {
          name: d.name,
          slug: utils.slugifyName(d.name, false),
          description: d.description,
          previewUrl: d.previewUrl,
          requirement: d.requirement,
          maxMember: d.maxMember,
          startDateTime: d.startDateTime,
          finishDateTime: d.finishDateTime,
        };
      }),
    );

    await connection
      .createQueryBuilder()
      .insert()
      .into(GigsProfile)
      .values(processedData as any)
      .execute();
  }
}
