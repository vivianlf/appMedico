class SaudeFisicaMental {
    libido: string;
    disposicao: string;
    ansioso: boolean;
    energia: string;
    paciente: Paciente; // Relacionamento: O estado de saúde física e mental pertence a um Paciente
  
    constructor(
      libido: string,
      disposicao: string,
      ansioso: boolean,
      energia: string,
      paciente: Paciente // Associação com o Paciente
    ) {
      this.libido = libido;
      this.disposicao = disposicao;
      this.ansioso = ansioso;
      this.energia = energia;
      this.paciente = paciente; // Define o paciente relacionado
    }
  
    registrarEstado(): void {
      // Função para registrar o estado de saúde física e mental do paciente
      console.log(`Estado de saúde física e mental registrado para o paciente: ${this.paciente.nomeCompleto}`);
    }
  
    consultarEstado(): string {
      // Função para consultar o estado de saúde física e mental
      return `Paciente: ${this.paciente.nomeCompleto}\nLibido: ${this.libido}\nDisposição: ${this.disposicao}\nAnsioso: ${this.ansioso}\nEnergia: ${this.energia}`;
    }
  }
  