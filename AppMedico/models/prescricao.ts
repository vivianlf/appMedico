class Prescricao {
    medicamento: Medicamento; // Relacionamento: A prescrição está associada a um Medicamento
    dosagem: string;
    orientacao: string;
    paciente: Paciente; // Relacionamento: A prescrição é feita para um Paciente
    medico: Medico; // Relacionamento: A prescrição é feita por um Médico
  
    constructor(
      medicamento: Medicamento, // Associação com o Medicamento
      dosagem: string,
      orientacao: string,
      paciente: Paciente, // Associação com o Paciente
      medico: Medico // Associação com o Médico
    ) {
      this.medicamento = medicamento;
      this.dosagem = dosagem;
      this.orientacao = orientacao;
      this.paciente = paciente; // Define o paciente para o qual a prescrição foi feita
      this.medico = medico; // Define o médico que fez a prescrição
    }
  
    consultar(): string {
      // Função para consultar a prescrição
      return `Prescrição para o paciente ${this.paciente.nomeCompleto} realizada pelo Dr. ${this.medico.nomeCompleto}: ${this.medicamento.nome}, ${this.dosagem}. Orientação: ${this.orientacao}`;
    }
  
    gerarLembrete(): string {
      // Função para gerar lembrete de prescrição
      return `Lembrete: Tomar ${this.dosagem} de ${this.medicamento.nome}. Orientação: ${this.orientacao}`;
    }
  }
  