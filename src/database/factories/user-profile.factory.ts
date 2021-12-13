import { define } from 'typeorm-seeding';
import { UserProfile } from '../../user-profile/entities/user-profile.entity';
import * as Faker from 'faker';
import { UserSkill } from 'src/user-skill/entities/user-skill.entity';
import { Skill } from 'src/skill/entities/skill.entity';

define(UserProfile, (faker: typeof Faker) => {
  const userProfile = new UserProfile();
  const userSkill1 = new UserSkill();
  const userSkill2 = new UserSkill();
  const userSkill3 = new UserSkill();
  const skill1 = new Skill();
  const skill2 = new Skill();
  const skill3 = new Skill();

  skill1.skillName = faker.name.jobArea();
  userSkill1.skill = skill1;
  skill2.skillName = faker.name.jobArea();
  userSkill2.skill = skill2;
  skill3.skillName = faker.name.jobArea();
  userSkill3.skill = skill3;

  userProfile.email = faker.internet.email();
  userProfile.password = faker.internet.password();
  userProfile.name = faker.name.firstName() + ' ' + faker.name.lastName();
  userProfile.bio = faker.random.words(10);
  userProfile.socialMediaUrl = faker.internet.url();
  userProfile.portfolioUrl = faker.internet.url();
  userProfile.profileImageUrl = faker.image.imageUrl();
  userProfile.cardShowoffUrl = faker.internet.url();
  userProfile.userSkills = [userSkill1, userSkill2, userSkill3];

  console.log(userProfile);

  return userProfile;
});
