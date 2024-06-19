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
import { Contact } from "./Contact";
import { ContactCountArgs } from "./ContactCountArgs";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactFindUniqueArgs } from "./ContactFindUniqueArgs";
import { CreateContactArgs } from "./CreateContactArgs";
import { UpdateContactArgs } from "./UpdateContactArgs";
import { DeleteContactArgs } from "./DeleteContactArgs";
import { Address } from "../../address/base/Address";
import { Company } from "../../company/base/Company";
import { Email } from "../../email/base/Email";
import { Phone } from "../../phone/base/Phone";
import { ContactService } from "../contact.service";
@graphql.Resolver(() => Contact)
export class ContactResolverBase {
  constructor(protected readonly service: ContactService) {}

  async _contactsMeta(
    @graphql.Args() args: ContactCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Contact])
  async contacts(
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    return this.service.contacts(args);
  }

  @graphql.Query(() => Contact, { nullable: true })
  async contact(
    @graphql.Args() args: ContactFindUniqueArgs
  ): Promise<Contact | null> {
    const result = await this.service.contact(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Contact)
  async createContact(
    @graphql.Args() args: CreateContactArgs
  ): Promise<Contact> {
    return await this.service.createContact({
      ...args,
      data: {
        ...args.data,

        address: args.data.address
          ? {
              connect: args.data.address,
            }
          : undefined,

        company: args.data.company
          ? {
              connect: args.data.company,
            }
          : undefined,

        email: args.data.email
          ? {
              connect: args.data.email,
            }
          : undefined,

        phone: args.data.phone
          ? {
              connect: args.data.phone,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Contact)
  async updateContact(
    @graphql.Args() args: UpdateContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.updateContact({
        ...args,
        data: {
          ...args.data,

          address: args.data.address
            ? {
                connect: args.data.address,
              }
            : undefined,

          company: args.data.company
            ? {
                connect: args.data.company,
              }
            : undefined,

          email: args.data.email
            ? {
                connect: args.data.email,
              }
            : undefined,

          phone: args.data.phone
            ? {
                connect: args.data.phone,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Contact)
  async deleteContact(
    @graphql.Args() args: DeleteContactArgs
  ): Promise<Contact | null> {
    try {
      return await this.service.deleteContact(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "address",
  })
  async getAddress(@graphql.Parent() parent: Contact): Promise<Address | null> {
    const result = await this.service.getAddress(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Company, {
    nullable: true,
    name: "company",
  })
  async getCompany(@graphql.Parent() parent: Contact): Promise<Company | null> {
    const result = await this.service.getCompany(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Email, {
    nullable: true,
    name: "email",
  })
  async getEmail(@graphql.Parent() parent: Contact): Promise<Email | null> {
    const result = await this.service.getEmail(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Phone, {
    nullable: true,
    name: "phone",
  })
  async getPhone(@graphql.Parent() parent: Contact): Promise<Phone | null> {
    const result = await this.service.getPhone(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}