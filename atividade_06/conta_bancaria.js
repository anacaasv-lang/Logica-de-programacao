class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo
    }

    verSaldo() {
        console.log(`´
            Olá ${this.titular},
            seu saldo atual é 
            r$ ${this.saldo},`)
    }
    depositar(valor) {
        this.saldo += valor;

    }

    //criar o método sacar e sacar 100 da sua conta
}

let contaDoJoab = new ContaBancaria("Joab" , 15000)
contaDoJoab.verSaldo(_)
contaDoJoab.verSaldo()
contaDoJoab.depositar(350)
contaDoJoab.verSaldo()

let contaDaDafne = new ContaBancaria("Dafne", 1000000)
    contaDaDafne.verSaldo(_)