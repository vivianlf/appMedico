enum ObjetivoLembrete {
    CONSULTA,
    EXAME,
    PRESCRICAO
  }
  
  class Lembrete {
    objetivo: ObjetivoLembrete;
    tipo: string;
    mensagem: string;
    consulta?: Consulta; // Relacionamento opcional com Consulta
    exame?: Exame; // Relacionamento opcional com Exame
    prescricao?: Prescricao; // Relacionamento opcional com Prescricao
  
    constructor(
      objetivo: ObjetivoLembrete,
      tipo: string,
      mensagem: string,
      consulta?: Consulta, // Associação opcional com Consulta
      exame?: Exame, // Associação opcional com Exame
      prescricao?: Prescricao // Associação opcional com Prescricao
    ) {
      this.objetivo = objetivo;
      this.tipo = tipo;
      this.mensagem = mensagem;
      this.consulta = consulta;
      this.exame = exame;
      this.prescricao = prescricao;
    }
  
    enviarLembrete(): void {
      
    }
  }
  