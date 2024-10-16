class ExameFisico {
    inspecaoGeral: string;
    ar: string; // Ausculta Respiratória
    acv: string; // Ausculta Cardiovascular
  
    constructor(inspecaoGeral: string, ar: string, acv: string) {
      this.inspecaoGeral = inspecaoGeral;
      this.ar = ar;
      this.acv = acv;
    }
  
    registrarExame(): void {
      // Função para registrar exame físico
    }
  }
  