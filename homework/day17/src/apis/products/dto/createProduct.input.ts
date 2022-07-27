import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Min(0) // main에 app.useGlobalPipes(new ValidationPipe()); 추가
  @Field(() => Int)
  price: number;

  @Field(() => String)
  level: string;

  @Field(() => Float)
  starRate: number;

  @Field(() => Boolean)
  isDiploma: boolean;
}
