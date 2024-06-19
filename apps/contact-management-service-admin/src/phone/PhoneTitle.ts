import { Phone as TPhone } from "../api/phone/Phone";

export const PHONE_TITLE_FIELD = "phoneNumber";

export const PhoneTitle = (record: TPhone): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
