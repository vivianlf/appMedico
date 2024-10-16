class Exame {
    dataAgendamento: Date;
    orientacao: string;
    resultado: File;
    tipoExame: TipoExame; // Associação com o tipo de exame
  
    constructor(dataAgendamento: Date, orientacao: string, resultado: File, tipoExame: TipoExame) {
      this.dataAgendamento = dataAgendamento;
      this.orientacao = orientacao;
      this.resultado = resultado;
      this.tipoExame = tipoExame; // Relaciona o exame com um tipo específico
    }
  
    consultarResultado(): string {
      // Função para consultar o resultado do exame
      return `Resultado disponível para o exame: ${this.resultado.name}`;
    }
  
    gerarLembrete(): string {
      // Função para gerar lembrete de exame
      return `Lembrete: Exame agendado para ${this.dataAgendamento}. Orientação: ${this.orientacao}.`;
    }
  
    exibirTipoExame(): string {
      // Função para exibir o tipo de exame
      return `Tipo de Exame: ${this.tipoExame.nome}, Descrição: ${this.tipoExame.descricao}`;
    }
  }
  