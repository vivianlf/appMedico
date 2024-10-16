class Medico extends Usuario {
    crm: string;
    consultas: Consulta[]; // Relacionamento: O médico pode realizar várias consultas
    exames: Exame[]; // Relacionamento: O médico pode prescrever e visualizar vários exames
    prescricoes: Prescricao[]; // Relacionamento: O médico pode prescrever várias prescrições
  
    constructor(
      nomeCompleto: string,
      cpf: string,
      email: string,
      senha: string,
      whatsapp: string,
      administrador: boolean,
      crm: string,
      consultas: Consulta[] = [], // Inicializa consultas como array vazio
      exames: Exame[] = [], // Inicializa exames como array vazio
      prescricoes: Prescricao[] = [] // Inicializa prescrições como array vazio
    ) {
      super(nomeCompleto, cpf, email, senha, whatsapp, administrador);
      this.crm = crm;
      this.consultas = consultas;
      this.exames = exames;
      this.prescricoes = prescricoes;
    }
  
    consultarPacientes(): Consulta[] {
      // Retorna as consultas realizadas pelo médico
      return this.consultas;
    }
  
    prescreverExame(exame: Exame): void {
      // Função para prescrever um novo exame ao paciente
      this.exames.push(exame);
      console.log(`Exame prescrito pelo Dr. ${this.nomeCompleto}: Exame agendado para ${exame.dataAgendamento}`);
    }
  
    prescreverMedicamento(prescricao: Prescricao): void {
      // Função para prescrever um novo medicamento
      this.prescricoes.push(prescricao);
      console.log(`Prescrição realizada pelo Dr. ${this.nomeCompleto}: ${prescricao.medicamento}`);
    }
  
    visualizarExames(): Exame[] {
      // Retorna os exames prescritos e visualizados pelo médico
      return this.exames;
    }
  
    realizarConsulta(consulta: Consulta): void {
      // Função para adicionar uma nova consulta ao histórico do médico
      this.consultas.push(consulta);
      console.log(`Consulta realizada pelo Dr. ${this.nomeCompleto} em ${consulta.data}`);
    }
  }
  