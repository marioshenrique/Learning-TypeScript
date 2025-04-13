// Tipagem de variável
const ola: string = "Hello world!"
console.log(ola)

// Tipagem de função
function soma(a: number, b: number): number {
    return a + b
}
console.log(soma(2,5))

// Tipagem de objeto

type Soma = {
    parametro1: number,
    parametro2: number,
    resultado: number
}

function somaTipada(a: number, b: number): Soma {
    return {
        parametro1: a,
        parametro2: b,
        resultado: soma(a, b)
    }
}
console.log(somaTipada(2,5))

// Tipagem 'void' em função sem retorno
function somaSemRetorno(a: number, b: number): void {
    console.log(`O resultado da soma é: ${a + b}`)
}
somaSemRetorno(10, 10)

// Type Annotations em arrays

type Condition = {
    n_parcelas: number,
    entrada: number,
    banco: string
}

type Simulation = {
    cpf_cliente: string,
    cpf_vendedor: string,
    conditions: Condition[]
}

const simulation1: Simulation = {
    cpf_cliente: "11868556492",
    cpf_vendedor: "11348639899",
    conditions: [
        {
            n_parcelas: 48,
            entrada: 1000000,
            banco: "Bradesco"
        },
        {
            n_parcelas: 36,
            entrada: 1000000,
            banco: "Bradesco"
        },
        {
            n_parcelas: 48,
            entrada: 1000000,
            banco: "Itau"
        },
        {
            n_parcelas: 36,
            entrada: 1000000,
            banco: "Itau"
        }
    ]
}
console.log("Primeira simulação:")
console.log(simulation1)

const listConditions: Condition[] = []

if (simulation1.conditions) {
    simulation1.conditions.forEach((cond: Condition) => {
        listConditions.push({
            n_parcelas: cond.n_parcelas,
            entrada: cond.entrada,
            banco: cond.banco
        })
    })
}

console.log("Conteúdo da variável listConditions: ")
console.log(listConditions)

// Type Annotations em objetos

type Pessoa = {
    nome: string,
    idade: number,
    cpf: string
}

const pessoa: Pessoa = {
    nome: "Mario Henrique",
    idade: 26,
    cpf: "11868556492"
}

console.log(pessoa)


// Hierarquia de tipos

// Uso do any:

type Carro = {
    renavam_code: any
    placa: string
}

const carro1: Carro = {
    renavam_code: 178293,
    placa: 'RGS1D20'
}

const carro2: Carro = {
    renavam_code: '178293',
    placa: 'RGS1D20'
}

console.log("Carro 1")
console.log(carro1)

console.log("Carro 2")
console.log(carro2)

// Uso do Unknown
type CarroUnknowm = {
    renavam_code: unknown,
    placa: string
}

const carroUnknown1: CarroUnknowm = {
    renavam_code: 178293,
    placa: 'RGS1D20'
}

console.log("Carro 1 Unknown")
console.log(carroUnknown1)

if (typeof carroUnknown1.renavam_code === "string") {
    console.log(`Renvam code do carro de placa ${carroUnknown1.placa}: ${carroUnknown1.renavam_code.toUpperCase()}`)
}
else if (typeof carroUnknown1.renavam_code === "number") {
    console.log(`Renavam code do carro de placa ${carroUnknown1.placa}: ${carroUnknown1.renavam_code.toFixed(2)}`)
}

// Tipos estruturais

console.log("Tipos  estruturais ----")

// Objetos

type Cachorro = {
    nome: string,
    idade: number,
    nome_dono: string
}

const cachorro: Cachorro = {
    nome: "Loki Lee",
    idade: 2,
    nome_dono: "Mario"
}

console.log(`Objetos cachorro:`)
console.log(cachorro)

// Arrays

type Fruta = {
    nome: string,
    quantidade: number | null
}

// Array de objetos
const frutas: Fruta[] = [
    {
        nome: "limão",
        quantidade: 1
    },
    {
        nome: "beterraba",
        quantidade: 1
    },
    {
        nome: "laranja",
        quantidade: 3
    }
]

console.log("Array de objetos")
console.log(frutas)

// Array de strings

const nomes: string[] = [
    "Mario",
    "Henrique",
    "Cosme",
    "Juvencio"
]
console.log("Array de strings")
console.log(nomes)

// Array de number

const anos: number[] = [
    1981,
    2019,
    2022,
    2025
]

console.log("Array de number")
console.log(anos)

// Array de tuplas

type Time = [
    string,
    number,
    boolean
]

const time: Time[] = [
    ["Flamengo", 1895, true],
    ["São Paulo", 1930, true],
    ["Corinthians", 1910, true]
]

console.log("Array de tuplas")
console.log(time)

// Type Alias

type Moto = {
    marca: string,
    quilometragem: number,
    ano: number,
    placa: string
}

const moto1: Moto = {
    marca: "Honda",
    quilometragem: 15765,
    ano: 2021,
    placa: "RGS1D20"
}

console.log("Type Alias")
console.log(moto1)

// Interface

interface Produto {
    nome: string,
    preco: number | string
}

const produto1: Produto = {
    nome: "Café Básico",
    preco: "15.00"
}

console.log("Interface")
console.log(produto1)

interface ProdutoComEstoque extends Produto {
    estoque: number
}

const produtoEstoque1: ProdutoComEstoque = {
    nome: "Café Royal",
    preco: 15.00,
    estoque: 30
}

console.log("Interface extends")
console.log(produtoEstoque1)

// Arrays de tipos múltiplos (Arrays com Union Types)

type ProdutoInterno = {
    id_interno: string,
    nome: string,
    qtd_estoque: number
}

type ProdutoExterno = {
    id_externo: string,
    nome: string,
    qtd_estoque: number,
    fornecedor: string
}

const produtos: (ProdutoInterno | ProdutoExterno)[] = [
    {
        id_interno: "A5g44",
        nome: "Café Royal",
        qtd_estoque: 2
    },
    { id_externo: "ext5744",
        nome: "Café Santa Clara",
        qtd_estoque: 15,
        fornecedor: "Santa Clara"
    }
]

console.log("Arrays com Union Types - Exemplo com Alias Type")
console.log(produtos)

const arraySimples: (string | number)[] = [
    "flamengo", 1981
]

console.log("Arrays com Union Types - Exemplo simples")
console.log(arraySimples)


// Arrays imutáveis

type Movel = {
    id: number,
    nome: string
}

const moveis: readonly Movel[] = [
    {
        id: 78,
        nome: "Sofá"
    },
    {
        id: 99,
        nome: "Geladeira Consul"
    }
]

console.log("Arrays imutáveis - readonly")
console.log(moveis)

// Tuplas

type Nome = [ 
    [nome: string, sobrenome: string] | 
    [nome: string, nomeMeio: string, sobrenome: string] ]

function criarPessoa( ... nome: Nome) {
    return [ ... nome]
}

console.log(criarPessoa(["Mario", "Henrique", "Juvencio"]))


type Animal = {
    nome: string,
    idade: number,
    cidade: string,
    raca: string
}

function registrarCachorro(params: Animal) {
    console.log(`Nome: ${params.nome}`)
    console.log(`idade: ${params.idade}`)
    console.log(`cidade: ${params.cidade}`)
    console.log(`raca: ${params.raca}`)
}

console.log(registrarCachorro({
    nome: "Loki",
    idade: 2,
    cidade: "União dos Palmares",
    raca: "Pitbull"
}))

// Definindo um objeto qualquer

const example_object = {
    0: 'Portugues',
    1: 'Espanhol',
    2: 'Ingles',
    3: 'Frances',
    Portugues: 0,
    Espanhol: 1,
    Ingles: 2,
    Frances: 3
}
console.log('Mostrando o conteúdo do objeto')
console.log(example_object)

// Acessando os valores do objeto

console.log('Acessando os valores do objeto')
console.log(example_object.Portugues)
console.log(example_object.Espanhol)
console.log(example_object[0])
console.log(example_object[1])

// Tipo void

// function normal:

function getError(message: string, type: string): void {
    console.log(`Error: ${message}`)
    console.log(`Type: ${type}`)
}

getError("The field 'name' is missing!", "Error type")


// arrow function

const getCallback = (): void => {
    console.log("An error is occurred")
}

const getErrorVoid = (callback: () => void): void => {
    callback();
}

getErrorVoid(getCallback)


// Tipo null

type Empresa = {
    nome: string | null,
    cnpj: string | null,
    setor: string | null,
    situacao?: string | null
}

const empresaEnergia: Empresa = {
    nome: "Equatorial SA",
    cnpj: "5566778899",
    setor: "energia",
    situacao: null
}

console.log(empresaEnergia)

console.log(empresaEnergia.situacao)

console.log(typeof empresaEnergia.situacao)

console.log(empresaEnergia.situacao != null ? empresaEnergia.situacao : null)

// Tipo undefined

const empresaAgua: Empresa = {
    nome: "Verde Alagoas",
    cnpj: "0585757474",
    setor: "água e esgoto sanitário"
}

console.log(empresaAgua)

console.log(empresaAgua.situacao)

console.log(typeof empresaAgua.situacao)

console.log(empresaAgua.situacao != undefined ? "armazema valor diferente de undefined" : empresaAgua.situacao)


// Tipo never

// function getErrorExecution(message: string): never {
//     throw Error(message)
// }
// getErrorExecution("Ocorreu um erro durante a eexecução do script!")


// Object

const personagem = {
    nome: "Valiant",
    idade: 12,
    id: "99989",
    preco: 14
}

console.log(personagem)

// object como parâmetro de função

function imprimirDado(dado: object): void {
    console.log(dado)
}

imprimirDado(["Mario", 26, "Maceió-AL"])
imprimirDado({nome: "Mario", idade: 26, cidade: "Maceió-AL"}) 

// object como parâmetro de função - uso com type:

type Loja = {
    nome: string,
    endereco?: string,
    telefone?: string,
    cnpj: string
}

function imprimirDadosLoja(dado: Loja): void {
    console.log(`Nome da loja: ${dado.nome}`)
    console.log(dado.endereco != undefined ? `Endereço da loja: ${dado.endereco}` : `Endereço da loja: desconhecido`)
    console.log(dado.telefone != undefined ? `Telefone: ${dado.telefone}` : `Telefone: desconhecido`)
    console.log(`CNPJ: ${dado.cnpj}`)
}

imprimirDadosLoja({
    nome: "Magda Lojas e Acessórios",
    endereco: "Rua Marechal Deodoro da Fonseca, 188",
    cnpj: "98765432"
})

// Parâmetros Opcionais em Objetos

// Exemplo usando interface

interface Config {
    modoEscuro?: boolean
}
function getConfig(config: Config): void {
    console.log(config.modoEscuro)
    console.log(`Modo escuro: ${config.modoEscuro ? 'Ativado' : 'desativado'}`)
}

getConfig({modoEscuro: true})

// Exemplo usando Type Alias

type StateConfig = {
    updateLeadFlag?: boolean
}

function getStateConfig(state: StateConfig): void {
    console.log(`Lead atualizado: ${state.updateLeadFlag ? "sim" : "não"}`)
}

getStateConfig({updateLeadFlag: true})

// Uso do readonly em objetos

// Exemplo 1 - campos específicos definidos como readonly

type Bank = {
    readonly code: string,
    readonly nome: string,
    tier: number,
    total_value: number
}

function getInfoBank(bank: Bank): void {
    bank.tier = 1 // operação permitida
    bank.total_value = 898768768 // operação permitida
    console.log("INFORMAÇÕES DO BANCO ==")
    console.log(`Banco: ${bank.nome}`)
    console.log(`Febraban Code: ${bank.code}`)
    console.log(`Tier: ${bank.tier}`)
    console.log(`Valor total: ${bank.total_value}`)
}

getInfoBank({
    code: "M422",
    nome: "Santander SA",
    tier: 3,
    total_value: 1789878984
})

interface User {
    readonly id: number,
    name: string
}

function updateInfoUser(user: User): User {
    user.name = "Mario" + " " +"Henrique"
    let new_user: User = {
        id: user.id,
        name: user.name
    }
    console.log(new_user)
    return new_user
}

updateInfoUser({
    id: 999,
    name: "Rui Patrício"
})


// Usando 'Readonly<T>' para tornar imutável todas as propriedades do objeto

interface Caneca {
    id: number,
    volume: number,
    marca: string,
    modelo: string
}

let caneca: Readonly<Caneca> = {
    id:99,
    volume: 1,
    marca: "Sandia Dakota",
    modelo: "Model best"
}

// Herança em interfaces

interface Pessoa1 {
    nome: string, 
    cpf: string
}

interface Funcionario extends Pessoa1{
    cargo: string,
    salario: number
}

const funcionarioEquatorial: Funcionario = {
    nome: "Alexandre de Moraes",
    cpf: "17865478988",
    cargo: "eletricista senior",
    salario: 8790
}

console.log(funcionarioEquatorial)

interface Endereco {
    cidade: string,
    bairro: string,
    rua: string
}

interface Contato {
    numero: string,
    email: string
}

interface Cliente extends Endereco, Contato {
    nome: string
}

const cliente: Cliente = {
    nome: "Mario Henrique",
    cidade: "Maceió-AL",
    bairro: "Centro",
    rua: "Rua Buarque de Macedo",
    numero: "35672279",
    email: "mario@gmail.com"
}

console.log(cliente)

// Generics 

// Objeto sem generics

interface CaixaMercado {
    id: string,
    valor: number
}

let caixa1: CaixaMercado = {
    id: "A9891",
    valor: 159.98
}

// Objeto com generics

interface Caixa<T> {
    id: string,
    valor: T
}

let caixa2: Caixa<string> = {
    id: "A8789",
    valor: "99"
}

// Interfaces genéricas

interface RespostaAPI<T> {
    success: boolean,
    data: T
}

type RespostaCredere = {
    id: string,
    cpf: string,
    situacao: boolean
}

type RespostaDataViva = {
    name: string,
    age: number,
    city: string,
    email: string
}

let respostaapi1: RespostaAPI<RespostaCredere> = {
    success: true,
    data: {
        id: "A8844",
        cpf: "36476599",
        situacao: true
    }
}

console.log(respostaapi1)

let respostaapi2: RespostaAPI<RespostaDataViva> = {
    success: true,
    data: {
        name: "Mario Henrique",
        age: 34,
        city: "São Paulo",
        email: "mario@gmail.com"
    }
}

console.log(respostaapi2)

// Type alias genérico

type RespostaServidor<T> = {
    id: string,
    success: boolean,
    data: T
}

type RespostaStarLink = {
    satelite: string, 
    velocidade: number,
    situacao: boolean
}

let respostaservidor1: RespostaServidor<RespostaStarLink> = {
    id: "K875H",
    success: true,
    data: {
        satelite: "LAICAK27",
        velocidade: 189.00,
        situacao: true
    }
}

console.log(respostaservidor1)

// Function com generics

type ProviderResponse<T> = {
    id: string,
    success: boolean,
    data: T
}

function getProviderResponse<T>(data: T): ProviderResponse<T> {
    return {
        id: "A87K555",
        success: true,
        data: data
    }
}

console.log("Function com generics")
console.log("cenário 1")

type ResponseStarLink = {
    name: string,
    id: string,
    n_items: number
}

let dataStarLink: ResponseStarLink = {
    name: "Musk satélite",
    id: "K984848",
    n_items: 98
}

console.log(getProviderResponse<ResponseStarLink>(dataStarLink))

console.log("Cenário 2")

type ResponseCredere = {
    id: string,
    situacao: boolean
}

let dataCredere: ResponseCredere = {
    id: "iahfifhrifhrifrh5i5ih55hi",
    situacao: false
}

console.log(getProviderResponse<ResponseCredere>(dataCredere))