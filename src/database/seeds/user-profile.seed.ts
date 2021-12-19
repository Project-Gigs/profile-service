import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as utils from '../../helpers/utils';

export default class CreateUserProfile implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const data = await utils.default.readData(
      'src/database/seeds/data/user-profile.json',
      async (result) => {
        const processedData = await Promise.all(
          result.map(async (d) => {
            const hashedPassword = await utils.default.hashPassword(d.password);
            return {
              email: d.email,
              password: hashedPassword,
              name: d.name,
              slug: utils.default.slugifyName(d.name),
              bio: d.bio,
              socialMediaUrl: d.socialMediaUrl,
              portfolioUrl: d.portfolioUrl,
              cardShowoffUrl: d.cardShowoffUrl,
              profileImageUrl: d.profileImageUrl,
            };
          }),
        );
        return processedData;
      },
    );

    await connection
      .createQueryBuilder()
      .insert()
      .into(UserProfile)
      .values(data)
      .execute();
  }
}
