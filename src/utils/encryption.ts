// In production, use a proper encryption library
export const encryptData = (data: any): string => {
  return btoa(JSON.stringify(data));
};

export const decryptData = (encrypted: string): any => {
  try {
    return JSON.parse(atob(encrypted));
  } catch {
    return null;
  }
};