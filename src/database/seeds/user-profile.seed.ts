import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import utils from '../../helpers/utils';
import data from './data/user-profile.json';

export default class CreateUserProfile implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<any> {
    const processedData = await Promise.all(
      (data as unknown as UserProfile[]).map(async (d) => {
        const hashedPassword = await utils.hashPassword(d.password);
        return {
          email: d.email,
          password: hashedPassword,
          name: d.name,
          slug: utils.slugifyName(d.name),
          bio: d.bio,
          socialMediaUrl: d.socialMediaUrl,
          portfolioUrl: d.portfolioUrl,
          cardShowoffUrl: d.cardShowoffUrl,
          profileImageUrl: d.profileImageUrl,
        };
      }),
    );

    await connection
      .createQueryBuilder()
      .insert()
      .into(UserProfile)
      .values(processedData as any)
      .execute();
  }
}
