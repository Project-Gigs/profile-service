import { Injectable } from '@nestjs/common';
import { CreateGigsProfileInput } from './dto/create-gigs-profile.input';
import { UpdateGigsProfileInput } from './dto/update-gigs-profile.input';

@Injectable()
export class GigsProfileService {
  create(createGigsProfileInput: CreateGigsProfileInput) {
    return 'This action adds a new gigsProfile';
  }

  findAll() {
    return `This action returns all gigsProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gigsProfile`;
  }

  update(id: number, updateGigsProfileInput: UpdateGigsProfileInput) {
    return `This action updates a #${id} gigsProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} gigsProfile`;
  }
}
