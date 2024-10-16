class EfeitoColateral {
    titulo: string;
    descricao: string;
    categoria: string;
    porcentagem: number; // Probabilidade do efeito colateral ocorrer
    svg: File; // Imagem visual associada ao efeito colateral
    bula: File; // Bula do medicamento contendo detalhes
  
    constructor(
      titulo: string,
      descricao: string,
      categoria: string,
      porcentagem: number,
      svg: File,
      bula: File
    ) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.categoria = categoria;
      this.porcentagem = porcentagem;
      this.svg = svg;
      this.bula = bula;
    }
  
    exibirDetalhes(): string {
      // Função para exibir os detalhes do efeito colateral
      return `Efeito Colateral: ${this.titulo}\nDescrição: ${this.descricao}\nCategoria: ${this.categoria}\nProbabilidade: ${this.porcentagem}%`;
    }
  
    visualizarImagem(): void {
      // Função para visualizar a imagem SVG associada ao efeito colateral
      console.log(`Visualizando imagem: ${this.svg.name}`);
    }
  
    visualizarBula(): void {
      // Função para visualizar a bula do medicamento
      console.log(`Visualizando bula: ${this.bula.name}`);
    }
  }
  