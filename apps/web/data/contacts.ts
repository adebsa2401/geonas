import { parsePhoneNumberWithError } from "libphonenumber-js";

export const companyAddress = "79 Rue de Bruxelles, Namur 5000";
export const companyEmail = "contact@geonas.be";
export const companyPhone = "+32499820619";
export const companyWhatsAppPhone = "+32499820619";

export const formatCompanyPhone = () => {
  try {
    return parsePhoneNumberWithError(companyPhone).formatInternational();
  } catch {
    return companyPhone;
  }
};

export const getCompanyPhoneURI = () => {
  try {
    return parsePhoneNumberWithError(companyPhone).getURI();
  } catch {
    return `tel:${companyPhone}`;
  }
};

export const getCompanyWhatsAppURI = () => {
  try {
    const phoneNumber = parsePhoneNumberWithError(
      companyWhatsAppPhone,
    ).number.replace("+", "");
    return `https://wa.me/${phoneNumber}`;
  } catch {
    return `https://wa.me/${companyWhatsAppPhone}`;
  }
};
