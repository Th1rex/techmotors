export type CsvValue = string | number | null | undefined;

function formatarCelulaCsv(value: CsvValue): string {
  if (value === null || value === undefined) return '""';

  const text = typeof value === 'number' ? String(value) : value;
  const firstNonWhitespace = typeof value === 'string' ? value.trimStart()[0] : '';
  const safeText = typeof value === 'string' && ['=', '+', '-', '@'].includes(firstNonWhitespace) ? `'${value}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}

export function gerarCsv(headers: string[], rows: CsvValue[][]): string {
  return [headers, ...rows].map((row) => row.map(formatarCelulaCsv).join(';')).join('\r\n');
}
