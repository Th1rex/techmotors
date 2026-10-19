import { describe, expect, it } from 'vitest';

import { gerarCsv } from './csv';

describe('gerarCsv', () => {
  it('quotes fields, escapes quotes, and preserves empty values', () => {
    expect(gerarCsv(['Nome', 'Observação', 'Valor'], [['Oficina', 'Revisão "completa"', null]])).toBe(
      '"Nome";"Observação";"Valor"\r\n"Oficina";"Revisão ""completa""";""'
    );
  });

  it('neutralizes spreadsheet formulas in untrusted text cells', () => {
    expect(gerarCsv(['Texto', 'Número'], [['=1+1', -12]])).toBe('"Texto";"Número"\r\n"\'=1+1";"-12"');
  });
});
