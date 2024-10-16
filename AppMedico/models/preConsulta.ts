class PreConsulta {
    historicoDoencas: string;
    medicacoesUsoContinuo: string;
    alergia: string;
    queixaDuracao: string;
    usoPrevioEAA: boolean;
    limitadores: string;
    historicoConvulsao: boolean;
    historicoGlaucoma: boolean;
    historicoNefrolitiase: boolean;
    pesoAlmejado: number;
    paciente: Paciente; // Relacionamento: PreConsulta pertence a um Paciente
  
    constructor(
      historicoDoencas: string,
      medicacoesUsoContinuo: string,
      alergia: string,
      queixaDuracao: string,
      usoPrevioEAA: boolean,
      limitadores: string,
      historicoConvulsao: boolean,
      historicoGlaucoma: boolean,
      historicoNefrolitiase: boolean,
      pesoAlmejado: number,
      paciente: Paciente // Associação com Paciente
    ) {
      this.historicoDoencas = historicoDoencas;
      this.medicacoesUsoContinuo = medicacoesUsoContinuo;
      this.alergia = alergia;
      this.queixaDuracao = queixaDuracao;
      this.usoPrevioEAA = usoPrevioEAA;
      this.limitadores = limitadores;
      this.historicoConvulsao = historicoConvulsao;
      this.historicoGlaucoma = historicoGlaucoma;
      this.historicoNefrolitiase = historicoNefrolitiase;
      this.pesoAlmejado = pesoAlmejado;
      this.paciente = paciente; // Atribui o paciente relacionado
    }
  
    registrarPreConsulta(): void {
      // Função para registrar a pré-consulta para um paciente
      console.log(`Pré-consulta registrada para o paciente: ${this.paciente.nomeCompleto}`);
    }
  
    consultarPreConsulta(): string {
      // Função para consultar os detalhes da pré-consulta
      return `Paciente: ${this.paciente.nomeCompleto}\nHistórico de Doenças: ${this.historicoDoencas}\nMedicações de Uso Contínuo: ${this.medicacoesUsoContinuo}\nPeso Almejado: ${this.pesoAlmejado}`;
    }
  }
  