export function validateCpf(value: string): boolean {
  const cpf = value.replace(/\D/g, "");
  let sum = 0, remainder;
  
  for (let i = 1; i <= 9; i++) 
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);

  remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))  
    remainder = 0;
  
  if (remainder != parseInt(cpf.substring(9, 10))) 
    return false;

  sum = 0;
  
  for (let i = 1; i <= 10; i++) 
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);

  remainder = (sum * 10) % 11;

  if ((remainder == 10) || (remainder == 11))  
    remainder = 0;
  
  if (remainder != parseInt(cpf.substring(10, 11))) 
    return false;
  
  return true;
}