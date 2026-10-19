function somenteDigitos(valor: string): string {
  return valor.replace(/\D/g, '');
}

function documentoComDigitosVerificadoresValidos(base: string, digitos: string, pesos: number[]): boolean {
  const soma = [...base].reduce(
    (total, caractere, indice) => total + Number(caractere) * pesos[indice % pesos.length],
    0
  );
  const resto = soma % 11;
  const verificador = resto < 2 ? 0 : 11 - resto;
  return verificador === Number(digitos[0]);
}

export function cpfValido(valor: string): boolean {
  const cpf = somenteDigitos(valor);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const primeiroDigito = documentoComDigitosVerificadoresValidos(
    cpf.slice(0, 9),
    cpf.slice(9, 10),
    [10, 9, 8, 7, 6, 5, 4, 3, 2]
  );
  if (!primeiroDigito) return false;

  return documentoComDigitosVerificadoresValidos(cpf.slice(0, 10), cpf.slice(10), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
}

function valorCaractereCnpj(caractere: string): number {
  return caractere.charCodeAt(0) - 48;
}

function calcularDigitoCnpj(base: string): number {
  let peso = 2;
  let soma = 0;
  for (let indice = base.length - 1; indice >= 0; indice--) {
    soma += valorCaractereCnpj(base[indice]) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

export function cnpjValido(valor: string): boolean {
  const cnpj = valor.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  if (!/^[A-Z0-9]{12}\d{2}$/.test(cnpj) || /^(\d)\1{13}$/.test(cnpj)) return false;

  const primeiroDigito = calcularDigitoCnpj(cnpj.slice(0, 12));
  if (primeiroDigito !== Number(cnpj[12])) return false;
  return calcularDigitoCnpj(cnpj.slice(0, 13)) === Number(cnpj[13]);
}

export function formatarCpf(valor: string): string {
  const cpf = somenteDigitos(valor).slice(0, 11);
  return cpf
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function formatarCnpj(valor: string): string {
  const cnpj = valor
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, 14);
  return cnpj
    .replace(/^(.{2})(.)/, '$1.$2')
    .replace(/^(.{2})\.(.{3})(.)/, '$1.$2.$3')
    .replace(/^(.{2})\.(.{3})\.(.{3})(.)/, '$1.$2.$3/$4')
    .replace(/(.{4})(.{1,2})$/, '$1-$2');
}

export function normalizarCpf(valor: string): string {
  const cpf = somenteDigitos(valor);
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function normalizarCnpj(valor: string): string {
  const cnpj = valor.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  return cnpj.replace(/(.{2})(.{3})(.{3})(.{4})(.{2})/, '$1.$2.$3/$4-$5');
}
