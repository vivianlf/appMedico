class Usuario {
  nomeCompleto: string;
  cpf: string;
  email: string;
  senha: string;
  whatsapp: string;
  administrador: boolean;

  constructor(nomeCompleto: string, cpf: string, email: string, senha: string, whatsapp: string, administrador: boolean) {
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.whatsapp = whatsapp;
    this.administrador = administrador;
  }

  login(): void {
    // Função de login
  }

  logout(): void {
    // Função de logout
  }

  cadastraUsuario(): void {
    // Função para cadastrar usuário
  }

  editaPerfil(): void {
    // Função para editar perfil do usuário
  }

  excluirUsuario(): void {
    // Função para excluir usuário
  }
}
