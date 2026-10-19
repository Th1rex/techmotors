import { describe, expect, it } from 'vitest';

import { cnpjValido, cpfValido, formatarCpf, formatarCnpj, normalizarCpf, normalizarCnpj } from './documentos';

describe('validação de CPF', () => {
  it('aceita CPF válido com e sem máscara', () => {
    expect(cpfValido('529.982.247-25')).toBe(true);
    expect(cpfValido('52998224725')).toBe(true);
  });

  it('rejeita dígitos verificadores incorretos e sequências repetidas', () => {
    expect(cpfValido('529.982.247-24')).toBe(false);
    expect(cpfValido('111.111.111-11')).toBe(false);
  });
});

describe('validação de CNPJ', () => {
  it('aceita CNPJ numérico válido com e sem máscara', () => {
    expect(cnpjValido('11.222.333/0001-81')).toBe(true);
    expect(cnpjValido('11222333000181')).toBe(true);
  });

  it('aceita CNPJ alfanumérico com dígitos verificadores válidos', () => {
    expect(cnpjValido('12.ABC.345/01DE-35')).toBe(true);
  });

  it('rejeita dígitos verificadores incorretos e sequências repetidas', () => {
    expect(cnpjValido('11.222.333/0001-80')).toBe(false);
    expect(cnpjValido('11.111.111/1111-11')).toBe(false);
  });
});

describe('formatação de documentos', () => {
  it('formata CPF e CNPJ sem remover letras válidas do CNPJ', () => {
    expect(formatarCpf('52998224725')).toBe('529.982.247-25');
    expect(formatarCnpj('12abc34501de35')).toBe('12.ABC.345/01DE-35');
    expect(normalizarCpf('52998224725')).toBe('529.982.247-25');
    expect(normalizarCnpj('12abc34501de35')).toBe('12.ABC.345/01DE-35');
  });
});
