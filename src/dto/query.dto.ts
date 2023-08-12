import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, IsArray,IsObject } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

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
  @Type(()=> Number)
  page: number;

  @Field()
  @IsNotEmpty()
  @Type(()=> Number)
  @IsNumber()
  pageSize: number;

  @Field(() => [String])
  @IsNotEmpty()
  @IsString({ each: true })
  sortBy: string[];
}

@InputType()
export class FilterDTO {

  @Field(() => [String])
  @IsNotEmpty()
  @IsString({ each: true })
  @IsOptional()
  select?: string[];

  @Field(() => [Where])
  @ValidateNested({ each: true })
  @IsOptional()
  where?: Where[];

  @Field()
  @Type(() => Pagination)
  @ValidateNested({ each: true })
  pagination: Pagination;

}

@InputType()
export class QueryDTO {

  @IsOptional()
  @Field(() => FilterDTO)
  query: FilterDTO;
}