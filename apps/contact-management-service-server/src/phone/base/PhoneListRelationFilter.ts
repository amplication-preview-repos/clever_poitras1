/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PhoneWhereInput } from "./PhoneWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PhoneListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => PhoneWhereInput)
  @IsOptional()
  @Field(() => PhoneWhereInput, {
    nullable: true,
  })
  every?: PhoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => PhoneWhereInput)
  @IsOptional()
  @Field(() => PhoneWhereInput, {
    nullable: true,
  })
  some?: PhoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhoneWhereInput,
  })
  @ValidateNested()
  @Type(() => PhoneWhereInput)
  @IsOptional()
  @Field(() => PhoneWhereInput, {
    nullable: true,
  })
  none?: PhoneWhereInput;
}
export { PhoneListRelationFilter as PhoneListRelationFilter };