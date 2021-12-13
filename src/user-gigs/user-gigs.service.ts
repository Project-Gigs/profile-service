import { Injectable } from '@nestjs/common';
import { CreateUserGigInput } from './dto/create-user-gig.input';
import { UpdateUserGigInput } from './dto/update-user-gig.input';

@Injectable()
export class UserGigsService {
  create(createUserGigInput: CreateUserGigInput) {
    return 'This action adds a new userGig';
  }

  findAll() {
    return `This action returns all userGigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGig`;
  }

  update(id: number, updateUserGigInput: UpdateUserGigInput) {
    return `This action updates a #${id} userGig`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGig`;
  }
}
