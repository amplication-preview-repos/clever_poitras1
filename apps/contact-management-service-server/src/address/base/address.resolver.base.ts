/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Address } from "./Address";
import { AddressCountArgs } from "./AddressCountArgs";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressFindUniqueArgs } from "./AddressFindUniqueArgs";
import { CreateAddressArgs } from "./CreateAddressArgs";
import { UpdateAddressArgs } from "./UpdateAddressArgs";
import { DeleteAddressArgs } from "./DeleteAddressArgs";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { AddressService } from "../address.service";
@graphql.Resolver(() => Address)
export class AddressResolverBase {
  constructor(protected readonly service: AddressService) {}

  async _addressesMeta(
    @graphql.Args() args: AddressCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Address])
  async addresses(
    @graphql.Args() args: AddressFindManyArgs
  ): Promise<Address[]> {
    return this.service.addresses(args);
  }

  @graphql.Query(() => Address, { nullable: true })
  async address(
    @graphql.Args() args: AddressFindUniqueArgs
  ): Promise<Address | null> {
    const result = await this.service.address(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Address)
  async createAddress(
    @graphql.Args() args: CreateAddressArgs
  ): Promise<Address> {
    return await this.service.createAddress({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Address)
  async updateAddress(
    @graphql.Args() args: UpdateAddressArgs
  ): Promise<Address | null> {
    try {
      return await this.service.updateAddress({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Address)
  async deleteAddress(
    @graphql.Args() args: DeleteAddressArgs
  ): Promise<Address | null> {
    try {
      return await this.service.deleteAddress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Contact], { name: "contacts" })
  async findContacts(
    @graphql.Parent() parent: Address,
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    const results = await this.service.findContacts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
