// converts a slug like /careers/internships/ into
// ['/careers/', '/careers/internships/']
export const breakdownSlugIntoUrls = slug => {
  const parts = slug.split("/");
  parts.shift();

  return parts.reduce((res, curr) => {
    return [...res, (res.slice(-1)[0] || "/") + curr + "/"];
  }, []);
};
