declare global {
  type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
  type TransacaoStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ['Valor (R$)']: string;
    ['Forma de Pagamento']: TransacaoPagamento;
    ['Cliente Novo']: number;
  }

  // normalizacao de TransacaoAPI
  interface Transacao {
    nome: string;
    id: number;
    data: string;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarTransacao(transacao: TransacaoAPI) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: transacao.Data,
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao['Valor (R$)'],
    valor: 0,
    pagamento: transacao['Forma de Pagamento'],
    novo: Boolean(transacao['Cliente Novo']),
  };
}
