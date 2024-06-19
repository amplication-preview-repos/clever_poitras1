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
import { ContactUpdateManyWithoutPhonesInput } from "./ContactUpdateManyWithoutPhonesInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumPhoneTypeField } from "./EnumPhoneTypeField";

@InputType()
class PhoneUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutPhonesInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutPhonesInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutPhonesInput, {
    nullable: true,
  })
  contacts?: ContactUpdateManyWithoutPhonesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPhoneTypeField,
  })
  @IsEnum(EnumPhoneTypeField)
  @IsOptional()
  @Field(() => EnumPhoneTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { PhoneUpdateInput as PhoneUpdateInput };