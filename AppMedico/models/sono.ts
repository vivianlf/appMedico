class Sono {
    qualidadeSono: string;
    horarioSono: string;
    inducaoSono: string;
    manutencaoSono: string;
    despertarSono: string;
    dormeBem: boolean;
    paciente: Paciente; // Relacionamento: O sono pertence a um Paciente
  
    constructor(
      qualidadeSono: string,
      horarioSono: string,
      inducaoSono: string,
      manutencaoSono: string,
      despertarSono: string,
      dormeBem: boolean,
      paciente: Paciente // Associação com o Paciente
    ) {
      this.qualidadeSono = qualidadeSono;
      this.horarioSono = horarioSono;
      this.inducaoSono = inducaoSono;
      this.manutencaoSono = manutencaoSono;
      this.despertarSono = despertarSono;
      this.dormeBem = dormeBem;
      this.paciente = paciente; // Define o paciente relacionado
    }
  
    registrarSono(): void {
      // Função para registrar os dados de sono do paciente
      console.log(`Dados de sono registrados para o paciente: ${this.paciente.nomeCompleto}`);
    }
  
    consultarSono(): string {
      // Função para consultar os dados de sono
      return `Paciente: ${this.paciente.nomeCompleto}\nQualidade do Sono: ${this.qualidadeSono}\nHorário do Sono: ${this.horarioSono}\nDorme Bem: ${this.dormeBem}`;
    }
  }
  