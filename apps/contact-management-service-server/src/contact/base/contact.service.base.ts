/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Contact as PrismaContact,
  Address as PrismaAddress,
  Company as PrismaCompany,
  Email as PrismaEmail,
  Phone as PrismaPhone,
} from "@prisma/client";

export class ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContactCountArgs, "select">): Promise<number> {
    return this.prisma.contact.count(args);
  }

  async contacts(args: Prisma.ContactFindManyArgs): Promise<PrismaContact[]> {
    return this.prisma.contact.findMany(args);
  }
  async contact(
    args: Prisma.ContactFindUniqueArgs
  ): Promise<PrismaContact | null> {
    return this.prisma.contact.findUnique(args);
  }
  async createContact(args: Prisma.ContactCreateArgs): Promise<PrismaContact> {
    return this.prisma.contact.create(args);
  }
  async updateContact(args: Prisma.ContactUpdateArgs): Promise<PrismaContact> {
    return this.prisma.contact.update(args);
  }
  async deleteContact(args: Prisma.ContactDeleteArgs): Promise<PrismaContact> {
    return this.prisma.contact.delete(args);
  }

  async getAddress(parentId: string): Promise<PrismaAddress | null> {
    return this.prisma.contact
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getCompany(parentId: string): Promise<PrismaCompany | null> {
    return this.prisma.contact
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }

  async getEmail(parentId: string): Promise<PrismaEmail | null> {
    return this.prisma.contact
      .findUnique({
        where: { id: parentId },
      })
      .email();
  }

  async getPhone(parentId: string): Promise<PrismaPhone | null> {
    return this.prisma.contact
      .findUnique({
        where: { id: parentId },
      })
      .phone();
  }
}