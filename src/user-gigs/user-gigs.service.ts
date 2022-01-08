import { Injectable } from '@nestjs/common';
import { CreateUserGigsInput } from './dto/create-user-gig.input';
import { UpdateUserGigsInput } from './dto/update-user-gig.input';

@Injectable()
export class UserGigsService {
  create(createUserGigsInput: CreateUserGigsInput) {
    return 'This action adds a new userGig';
  }

  findAll() {
    return `This action returns all userGigs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGig`;
  }

  update(id: number, updateUserGigsInput: UpdateUserGigsInput) {
    return `This action updates a #${id} userGig`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGig`;
  }
}
