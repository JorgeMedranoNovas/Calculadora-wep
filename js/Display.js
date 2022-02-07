class Display{
    constructor(displayvalorAnterior,displayvaloractual){
        this.displayvaloractual = displayvaloractual;
        this.displayvalorAnterior = displayvalorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion =  undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos =  {
            sumar: "+",
            dividir: '%',
            multiplicar: 'x',
            restar: '-'
        }
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrartodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion =  undefined;
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero == "." && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){

        this.displayvaloractual.textContent = this.valorActual;
        this.displayvalorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;

    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; 
        this.valorActual = '';
        this.imprimirValores();
    }
   
    calcular() {

        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if( isNaN(valorActual)|| isNaN(valorAnterior))return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual)   
     }




}