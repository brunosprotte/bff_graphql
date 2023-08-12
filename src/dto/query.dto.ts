import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, IsArray,IsObject } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';


export enum ComparisonOperator {
  EQ = 'EQ',
  GE = 'GE',
  // Add more comparison operators if needed
}

@InputType()
class Where {
  @Field()
  @IsNotEmpty()
  @IsString()
  field: string;

  @Field()
  @IsNotEmpty()
  @IsIn(Object.values(ComparisonOperator))
  operation: ComparisonOperator;
  
  @Field()
  @IsNotEmpty()
  @IsString()
  value: string;
}

@InputType()
class Pagination {
  @Field()
  @IsNotEmpty()
  @IsIn(['asc', 'desc'])
  order: 'asc' | 'desc';

  @Field()
  @IsNotEmpty()
  @IsNumber()
  page: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  pageSize: number;

  @Field(() => [String])
  @IsNotEmpty()
  @IsString({ each: true })
  sortBy: string[];
}

@InputType()
export class FilterDTO {

  @Field(() => [String], {nullable: true})
  @IsOptional()
  select?: string[];

  @Field(() => [Where], {nullable: true})
  @ValidateNested({ each: true })
  where?: Where[];

  @Field(() => Pagination)
  // @ValidateNested({ each: true })
  pagination: Pagination;

}