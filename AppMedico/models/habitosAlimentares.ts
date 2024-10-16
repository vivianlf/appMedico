class HabitosAlimentares {
    compulsaoAlimentar: boolean;
    gostaDocesAlcool: boolean;
    fomeNoturna: boolean;
    fomeEmocional: boolean;
    habitoBeliscador: boolean;
    paciente: Paciente; // Relacionamento com a classe Paciente
  
    constructor(
      compulsaoAlimentar: boolean,
      gostaDocesAlcool: boolean,
      fomeNoturna: boolean,
      fomeEmocional: boolean,
      habitoBeliscador: boolean,
      paciente: Paciente // Relaciona este registro de hábitos alimentares a um paciente específico
    ) {
      this.compulsaoAlimentar = compulsaoAlimentar;
      this.gostaDocesAlcool = gostaDocesAlcool;
      this.fomeNoturna = fomeNoturna;
      this.fomeEmocional = fomeEmocional;
      this.habitoBeliscador = habitoBeliscador;
      this.paciente = paciente; // Define o paciente relacionado
    }
  
    registrarHabitoAlimentar(): void {
      // Função para registrar os hábitos alimentares do paciente
      console.log(`Habitos alimentares registrados para o paciente: ${this.paciente.nomeCompleto}`);
    }
  }
  