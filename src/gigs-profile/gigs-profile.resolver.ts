import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigsProfileService } from './gigs-profile.service';
import { GigsProfile } from './entities/gigs-profile.entity';
import { CreateGigsProfileInput } from './dto/create-gigs-profile.input';
import { UpdateGigsProfileInput } from './dto/update-gigs-profile.input';

@Resolver(() => GigsProfile)
export class GigsProfileResolver {
  constructor(private readonly gigsProfileService: GigsProfileService) {}

  @Mutation(() => GigsProfile)
  createGigsProfile(@Args('createGigsProfileInput') createGigsProfileInput: CreateGigsProfileInput) {
    return this.gigsProfileService.create(createGigsProfileInput);
  }

  @Query(() => [GigsProfile], { name: 'gigsProfile' })
  findAll() {
    return this.gigsProfileService.findAll();
  }

  @Query(() => GigsProfile, { name: 'gigsProfile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gigsProfileService.findOne(id);
  }

  @Mutation(() => GigsProfile)
  updateGigsProfile(@Args('updateGigsProfileInput') updateGigsProfileInput: UpdateGigsProfileInput) {
    return this.gigsProfileService.update(updateGigsProfileInput.id, updateGigsProfileInput);
  }

  @Mutation(() => GigsProfile)
  removeGigsProfile(@Args('id', { type: () => Int }) id: number) {
    return this.gigsProfileService.remove(id);
  }
}
