/**
 * Recebe string '1.200,10' retorna number: 1200.10
 */
export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(numero) ? null : numero;
}
