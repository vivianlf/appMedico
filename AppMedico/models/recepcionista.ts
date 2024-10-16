class Recepcionista extends Usuario {
    pacientes: Paciente[]; // Relacionamento: A recepcionista pode cadastrar vários pacientes
    consultas: Consulta[]; // Relacionamento: A recepcionista pode agendar várias consultas
  
    constructor(
      nomeCompleto: string,
      cpf: string,
      email: string,
      senha: string,
      whatsapp: string,
      administrador: boolean,
      pacientes: Paciente[] = [], // Inicializa com um array vazio de pacientes
      consultas: Consulta[] = [] // Inicializa com um array vazio de consultas
    ) {
      super(nomeCompleto, cpf, email, senha, whatsapp, administrador);
      this.pacientes = pacientes;
      this.consultas = consultas;
    }
  
    cadastrarPaciente(paciente: Paciente): void {
      // Função para cadastrar um paciente
      this.pacientes.push(paciente);
      console.log(`Paciente ${paciente.nomeCompleto} cadastrado pela recepcionista ${this.nomeCompleto}`);
    }
  
    agendarConsulta(consulta: Consulta): void {
      // Função para agendar uma consulta
      this.consultas.push(consulta);
      console.log(`Consulta agendada pela recepcionista ${this.nomeCompleto} para o paciente ${consulta.registroConsulta}`);
    }
  
    consultarPacientes(): Paciente[] {
      // Retorna os pacientes cadastrados pela recepcionista
      return this.pacientes;
    }
  
    consultarConsultas(): Consulta[] {
      // Retorna as consultas agendadas pela recepcionista
      return this.consultas;
    }
  }
  