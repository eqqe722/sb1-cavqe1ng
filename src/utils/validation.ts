export const validateIraqiNationalId = (id: string): boolean => {
  // Iraqi National ID validation logic
  const regex = /^\d{12}$/;
  return regex.test(id);
};

export const validateIraqiPhoneNumber = (phone: string): boolean => {
  // Iraqi phone number validation
  const regex = /^07[3-9]\d{8}$/;
  return regex.test(phone);
};

export const validateIraqiPostalCode = (postalCode: string): boolean => {
  // Iraqi postal code validation
  const regex = /^\d{5}$/;
  return regex.test(postalCode);
};