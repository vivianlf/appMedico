class AvaliacaoConsulta {
    nota: number;
    comentario: string;
    dataAvaliacao: Date; // Data da avaliação
    consultaId: string; // Relaciona a avaliação com uma consulta específica
  
    constructor(nota: number, comentario: string, consultaId: string, dataAvaliacao: Date = new Date()) {
      this.nota = nota;
      this.comentario = comentario;
      this.consultaId = consultaId; // Identifica a qual consulta a avaliação está relacionada
      this.dataAvaliacao = dataAvaliacao; // Define a data da avaliação, padrão como a data atual
    }
  
    enviarAvaliacao(): void {
      // Função para enviar avaliação da consulta
      console.log(`Avaliação enviada: Nota ${this.nota}, Comentário: ${this.comentario}`);
    }
  
    consultarAvaliacao(): string {
      // Função para consultar avaliação enviada
      return `Consulta: ${this.consultaId}, Nota: ${this.nota}, Comentário: ${this.comentario}, Data: ${this.dataAvaliacao}`;
    }
  }
  