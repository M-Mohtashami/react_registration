export default function confirmPassword(password: string, confirm: string) {
  console.log(password, confirm);

  return password === confirm;
}
