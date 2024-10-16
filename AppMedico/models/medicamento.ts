class Medicamento {
    nome: string;
    resumo: string;
    efeitosColaterais: EfeitoColateral[]; // Relacionamento: Um medicamento pode ter vários efeitos colaterais
  
    constructor(nome: string, resumo: string, efeitosColaterais: EfeitoColateral[] = []) {
      this.nome = nome;
      this.resumo = resumo;
      this.efeitosColaterais = efeitosColaterais; // Inicializa com uma lista de efeitos colaterais
    }
  
    consultarEfeitosColaterais(): string {
      // Função para consultar os efeitos colaterais do medicamento
      if (this.efeitosColaterais.length === 0) {
        return "Nenhum efeito colateral associado a este medicamento.";
      } else {
        return this.efeitosColaterais
          .map(
            (efeito, index) =>
              `${index + 1}. ${efeito.titulo}: ${efeito.descricao} (Categoria: ${efeito.categoria}, ${efeito.porcentagem}% de ocorrência)`
          )
          .join("\n");
      }
    }
  
    adicionarEfeitoColateral(efeito: EfeitoColateral): void {
      // Função para adicionar um efeito colateral ao medicamento
      this.efeitosColaterais.push(efeito);
      console.log(`Efeito colateral '${efeito.titulo}' adicionado ao medicamento '${this.nome}'.`);
    }
  }
  