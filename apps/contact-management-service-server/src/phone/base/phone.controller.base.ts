/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PhoneService } from "../phone.service";
import { PhoneCreateInput } from "./PhoneCreateInput";
import { Phone } from "./Phone";
import { PhoneFindManyArgs } from "./PhoneFindManyArgs";
import { PhoneWhereUniqueInput } from "./PhoneWhereUniqueInput";
import { PhoneUpdateInput } from "./PhoneUpdateInput";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";

export class PhoneControllerBase {
  constructor(protected readonly service: PhoneService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Phone })
  async createPhone(@common.Body() data: PhoneCreateInput): Promise<Phone> {
    return await this.service.createPhone({
      data: data,
      select: {
        createdAt: true,
        id: true,
        notes: true,
        phoneNumber: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Phone] })
  @ApiNestedQuery(PhoneFindManyArgs)
  async phones(@common.Req() request: Request): Promise<Phone[]> {
    const args = plainToClass(PhoneFindManyArgs, request.query);
    return this.service.phones({
      ...args,
      select: {
        createdAt: true,
        id: true,
        notes: true,
        phoneNumber: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Phone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async phone(
    @common.Param() params: PhoneWhereUniqueInput
  ): Promise<Phone | null> {
    const result = await this.service.phone({
      where: params,
      select: {
        createdAt: true,
        id: true,
        notes: true,
        phoneNumber: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Phone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePhone(
    @common.Param() params: PhoneWhereUniqueInput,
    @common.Body() data: PhoneUpdateInput
  ): Promise<Phone | null> {
    try {
      return await this.service.updatePhone({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          notes: true,
          phoneNumber: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Phone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePhone(
    @common.Param() params: PhoneWhereUniqueInput
  ): Promise<Phone | null> {
    try {
      return await this.service.deletePhone({
        where: params,
        select: {
          createdAt: true,
          id: true,
          notes: true,
          phoneNumber: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/contacts")
  @ApiNestedQuery(ContactFindManyArgs)
  async findContacts(
    @common.Req() request: Request,
    @common.Param() params: PhoneWhereUniqueInput
  ): Promise<Contact[]> {
    const query = plainToClass(ContactFindManyArgs, request.query);
    const results = await this.service.findContacts(params.id, {
      ...query,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        email: {
          select: {
            id: true,
          },
        },

        firstName: true,
        id: true,
        jobTitle: true,
        lastName: true,
        notes: true,

        phone: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contacts")
  async connectContacts(
    @common.Param() params: PhoneWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        connect: body,
      },
    };
    await this.service.updatePhone({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contacts")
  async updateContacts(
    @common.Param() params: PhoneWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        set: body,
      },
    };
    await this.service.updatePhone({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contacts")
  async disconnectContacts(
    @common.Param() params: PhoneWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        disconnect: body,
      },
    };
    await this.service.updatePhone({
      where: params,
      data,
      select: { id: true },
    });
  }
}
