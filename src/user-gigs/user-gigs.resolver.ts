import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserGigsService } from './user-gigs.service';
import { UserGig } from './entities/user-gig.entity';
import { CreateUserGigInput } from './dto/create-user-gig.input';
import { UpdateUserGigInput } from './dto/update-user-gig.input';

@Resolver(() => UserGig)
export class UserGigsResolver {
  constructor(private readonly userGigsService: UserGigsService) {}

  @Mutation(() => UserGig)
  createUserGig(@Args('createUserGigInput') createUserGigInput: CreateUserGigInput) {
    return this.userGigsService.create(createUserGigInput);
  }

  @Query(() => [UserGig], { name: 'userGigs' })
  findAll() {
    return this.userGigsService.findAll();
  }

  @Query(() => UserGig, { name: 'userGig' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userGigsService.findOne(id);
  }

  @Mutation(() => UserGig)
  updateUserGig(@Args('updateUserGigInput') updateUserGigInput: UpdateUserGigInput) {
    return this.userGigsService.update(updateUserGigInput.id, updateUserGigInput);
  }

  @Mutation(() => UserGig)
  removeUserGig(@Args('id', { type: () => Int }) id: number) {
    return this.userGigsService.remove(id);
  }
}
