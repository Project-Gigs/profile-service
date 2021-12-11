import { define } from 'typeorm-seeding';
import { UserProfile } from '../../user-profile/entities/user-profile.entity';
import * as Faker from 'faker';

define(UserProfile, (faker: typeof Faker) => {
  const userProfile = new UserProfile();

  userProfile.user_id = faker.random.number();
  userProfile.email = faker.internet.email();
  userProfile.password = faker.internet.password();
  userProfile.name = faker.name.firstName() + faker.name.lastName();
  userProfile.bio = faker.random.words(10);
  userProfile.slug = faker.random.word();
  userProfile.social_media_url = faker.internet.url();
  userProfile.portfolio_url = faker.internet.url();
  userProfile.profile_image_url = faker.image.imageUrl();
  userProfile.card_showoff_url = faker.internet.url();
  userProfile.created_at = faker.date.past();
  userProfile.updated_at = faker.date.recent();
  userProfile.deleted_at = null;

  return userProfile;
});
