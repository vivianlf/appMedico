class Paciente extends Usuario {
    preConsultas: PreConsulta[]; // Um paciente pode preencher várias pré-consultas
    exames: Exame[]; // Um paciente pode realizar vários exames
    prescricoes: Prescricao[]; // Um paciente pode acessar várias prescrições
    habitosAlimentares: HabitosAlimentares[]; // Um paciente pode ter vários registros de hábitos alimentares
    sono: Sono[]; // Um paciente pode ter vários registros de sono
    atividadeFisica: AtividadeFisica[]; // Um paciente pode ter vários registros de atividade física
    saudeFisicaMental: SaudeFisicaMental[]; // Um paciente pode ter vários registros de saúde física e mental
    
    constructor(
      nomeCompleto: string,
      cpf: string,
      email: string,
      senha: string,
      whatsapp: string,
      administrador: boolean,
      preConsultas: PreConsulta[], // Relacionamento de múltiplas pré-consultas
      exames: Exame[],
      prescricoes: Prescricao[],
      habitosAlimentares: HabitosAlimentares[],
      sono: Sono[],
      atividadeFisica: AtividadeFisica[],
      saudeFisicaMental: SaudeFisicaMental[]
    ) {
      super(nomeCompleto, cpf, email, senha, whatsapp, administrador);
      this.preConsultas = preConsultas;
      this.exames = exames;
      this.prescricoes = prescricoes;
      this.habitosAlimentares = habitosAlimentares;
      this.sono = sono;
      this.atividadeFisica = atividadeFisica;
      this.saudeFisicaMental = saudeFisicaMental;
    }
  
    consultarExames(): Exame[] {
      return this.exames;
    }
  
    acessarPrescricoes(): Prescricao[] {
      return this.prescricoes;
    }
  
    atualizarHabitosAlimentares(habito: HabitosAlimentares): void {
      this.habitosAlimentares.push(habito);
    }
  
    atualizarSono(sono: Sono): void {
      this.sono.push(sono);
    }
  
    atualizarAtividadeFisica(atividade: AtividadeFisica): void {
      this.atividadeFisica.push(atividade);
    }
  
    atualizarSaudeFisicaMental(saude: SaudeFisicaMental): void {
      this.saudeFisicaMental.push(saude);
    }
  
    preencherPreConsulta(preConsulta: PreConsulta): void {
      this.preConsultas.push(preConsulta);
    }
  }
  