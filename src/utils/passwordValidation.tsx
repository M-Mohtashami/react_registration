export default function passwordValisation(password: string) {
  const re = new RegExp(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  );
  return re.test(password);
}
