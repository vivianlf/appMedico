class AtividadeFisica {
    praticaAtividadeFisica: boolean;
    tipoTreinamento: string;
    frequenciaTreinos: string;
    tempoExperiencia: string;
    progressoAtividade: string[]; // Armazena progresso ou relatórios de atividade
  
    constructor(
      praticaAtividadeFisica: boolean,
      tipoTreinamento: string,
      frequenciaTreinos: string,
      tempoExperiencia: string,
      progressoAtividade: string[] = []
    ) {
      this.praticaAtividadeFisica = praticaAtividadeFisica;
      this.tipoTreinamento = tipoTreinamento;
      this.frequenciaTreinos = frequenciaTreinos;
      this.tempoExperiencia = tempoExperiencia;
      this.progressoAtividade = progressoAtividade; // Inicializa com um array vazio por padrão
    }
  
    registrarAtividade(): void {
      // Função para registrar atividade física
    }
  
    adicionarProgressoAtividade(progresso: string): void {
      // Adiciona um novo progresso de atividade física
      this.progressoAtividade.push(progresso);
    }
  
    consultarProgresso(): string[] {
      // Retorna o progresso da atividade física
      return this.progressoAtividade;
    }
  }
  