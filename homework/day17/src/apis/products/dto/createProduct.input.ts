import { Field, InputType } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;

  @Min(0)
  @Field(() => String)
  subCategoryId: string;
}
