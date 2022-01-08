import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserGigsService } from './user-gigs.service';
import { UserGigs } from './entities/user-gigs.entity';
import { CreateUserGigsInput } from './dto/create-user-gig.input';
import { UpdateUserGigsInput } from './dto/update-user-gig.input';

@Resolver(() => UserGigs)
export class UserGigsResolver {
  constructor(private readonly userGigsService: UserGigsService) {}

  @Mutation(() => UserGigs)
  createUserGig(
    @Args('createUserGigsInput') createUserGigsInput: CreateUserGigsInput,
  ) {
    return this.userGigsService.create(createUserGigsInput);
  }

  @Query(() => [UserGigs], { name: 'userGigs' })
  findAll() {
    return this.userGigsService.findAll();
  }

  @Query(() => UserGigs, { name: 'userGig' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userGigsService.findOne(id);
  }

  @Mutation(() => UserGigs)
  updateUserGig(
    @Args('updateUserGigsInput') updateUserGigsInput: UpdateUserGigsInput,
  ) {
    return this.userGigsService.update(
      updateUserGigsInput.id,
      updateUserGigsInput,
    );
  }

  @Mutation(() => UserGigs)
  removeUserGig(@Args('id', { type: () => Int }) id: number) {
    return this.userGigsService.remove(id);
  }
}
