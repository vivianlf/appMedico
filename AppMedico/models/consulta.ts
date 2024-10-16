enum TipoConsulta {
    ANAMNESE,
    PRE_CONSULTA
  }
  
  class Consulta {
    data: Date;
    status: string;
    tipo: TipoConsulta;
    registroConsulta: string;
    pesoAtual: number;
    pressao: number;
    imc: number;
    altura: number;
    hipoteseDiagnostica: string;
    conduta: string;
    exameFisico: ExameFisico; // Uma consulta tem um exame físico
    avaliacoesConsulta: AvaliacaoConsulta[]; // Uma consulta pode receber várias avaliações
  
    constructor(
      data: Date,
      status: string,
      tipo: TipoConsulta,
      registroConsulta: string,
      pesoAtual: number,
      pressao: number,
      imc: number,
      altura: number,
      hipoteseDiagnostica: string,
      conduta: string,
      exameFisico: ExameFisico,
      avaliacoesConsulta: AvaliacaoConsulta[]
    ) {
      this.data = data;
      this.status = status;
      this.tipo = tipo;
      this.registroConsulta = registroConsulta;
      this.pesoAtual = pesoAtual;
      this.pressao = pressao;
      this.imc = imc;
      this.altura = altura;
      this.hipoteseDiagnostica = hipoteseDiagnostica;
      this.conduta = conduta;
      this.exameFisico = exameFisico;
      this.avaliacoesConsulta = avaliacoesConsulta;
    }
  
    agendar(): void {
      // Função para agendar consulta
    }
  
    atualizarStatus(): void {
      // Função para atualizar o status da consulta
    }
  
    gerarLembrete(): void {
      // Função para gerar lembrete de consulta
    }
  
    realizarExameFisico(exameFisico: ExameFisico): void {
      this.exameFisico = exameFisico;
    }
  
    adicionarAvaliacao(avaliacao: AvaliacaoConsulta): void {
      this.avaliacoesConsulta.push(avaliacao);
    }
  }
  