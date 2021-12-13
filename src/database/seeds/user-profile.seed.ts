import { Factory, Seeder } from 'typeorm-seeding';
import { UserProfile } from '../../user-profile/entities/user-profile.entity';

export default class CreateUserProfile implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(UserProfile)().createMany(10);
  }
}
