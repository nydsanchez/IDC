export default function data(data) {
  let errors = {};

  if (!data.email.includes("@")) errors.e1 = "Your username must be an email";
  if (!data.email) errors.e2 = "Please, enter an email";
  if (data.email.length > 35)
    errors.e3 = "Your username must be less than 35 characters";

  if (!/\d/.test(data.psd))
    errors.p1 = "Your password must contain at least one number";

  if (data.psd.length < 6 || data.psd.length > 10)
    errors.p2 = "Your the password must be between 6 and 10 characters long.";

  return errors;
}
