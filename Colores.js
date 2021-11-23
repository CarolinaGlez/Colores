class Forma {
  constructor(color, nombreForma) {
    this.color = color;
    this.nombreForma = nombreForma;
  }
  forma(color, nombreForma) {
    console.log('Mi forma es un ', this.nombreForma);
    console.log('Soy de color', this.color);
  }
  calculaArea() {
    throw new Error("abstrac");
  }
  calculaPerimetro() {
    throw new Error("abstrac");
  }
}

class Rectangulo extends Forma {
  constructor(color, nombreForma, ladoMenor, ladoMayor) {
    super(color, nombreForma);
    this.ladoMenor = ladoMenor;
    this.ladoMayor = ladoMayor;
  }
  calculaArea(ladoMenor, ladoMayor) {
    console.log('Mi area es:', ladoMenor * ladoMayor);
  }

  calculaPerimetro(ladoMenor, ladoMayor) {
    console.log('Mi pemimetro es:', (2 * (ladoMenor + ladoMayor)));
  }
}

class Triangulo extends Forma {
  constructor(color, nombreForma, base, altura) {
    super(color, nombreForma);
    this.base = base;
    this.altura = altura;
  }
  calculaArea(base, altura) {
    console.log('Mi area es:', ((base * altura) / 2));
  }

  calculaPerimetro(base) {
    console.log('Mi pemimetro es:', base + base + base);
  }
}

class Circulo extends Forma {
  constructor(color, nombreForma, radio) {
    super(color, nombreForma);
    this.radio = radio;
  }
  calculaArea(radio) {
    console.log('Mi area es:', (3.1416 * (radio * radio)));
  }

  calculaPerimetro(radio) {
    console.log('Mi pemimetro es:', (3.1416 * 2 * radio));
  }
}



const R = new Rectangulo("Purpura", "Rectangulo", 14, 5);
R.forma();
R.calculaArea(R.ladoMenor, R.ladoMayor);
R.calculaPerimetro(R.ladoMenor, R.ladoMayor);

const T = new Triangulo("Café", "Triangulo", 9, 2);
T.forma();
T.calculaArea(T.base, T.altura);
T.calculaPerimetro(T.base);

const C = new Circulo("Negro", "Circulo", 13);
C.forma();
C.calculaPerimetro(C.radio);
C.calculaArea(C.radio);