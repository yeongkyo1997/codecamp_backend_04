import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { StarbucksService } from './menus.service';
import { Starbucks } from './entities/menu.entity';
import { CreateStarbucksInput } from './dto/createStarbuck.Input';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') CreateStarbucksInput: CreateStarbucksInput,
  ) {
    console.log(CreateStarbucksInput);

    return this.starbucksService.create();
  }
}
