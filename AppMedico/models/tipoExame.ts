class TipoExame {
    nome: string;
    descricao: string;
    exames: Exame[]; // Relacionamento: Um TipoExame pode estar associado a vários Exames
  
    constructor(nome: string, descricao: string, exames: Exame[] = []) {
      this.nome = nome;
      this.descricao = descricao;
      this.exames = exames; // Inicializa o array de exames
    }
  
    cadastrarExame(exame: Exame): void {
      // Função para cadastrar um novo exame ao tipo de exame
      this.exames.push(exame);
      console.log(`Exame do tipo ${this.nome} cadastrado: ${exame.dataAgendamento}`);
    }
  
    consultarExames(): Exame[] {
      // Função para consultar todos os exames associados a este tipo
      return this.exames;
    }
  }
  