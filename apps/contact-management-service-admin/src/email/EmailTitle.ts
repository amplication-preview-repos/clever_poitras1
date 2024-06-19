import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "id";

export const EmailTitle = (record: TEmail): string => {
  return record.id?.toString() || String(record.id);
};
