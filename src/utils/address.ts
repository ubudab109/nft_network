export const shorthenAddress = (address?: string | null): string => {
  if (!address) return "0x0";

  return address.replace(/^(.{6})(.+)(.{4})/, "$1...$3");
};
