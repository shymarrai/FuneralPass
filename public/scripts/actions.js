function replyDeclarantData(){
    const declarant_name_start = document.getElementById("declarant_name_start")
    const declarant_cpf_start = document.getElementById("declarant_cpf_start")
    
    const declarant_name_dataDeclarant = document.getElementById("declarant_name_dataDeclarant")
    const declarant_cpf_dataDeclarant = document.getElementById("declarant_cpf_dataDeclarant")

    declarant_name_dataDeclarant.value = declarant_name_start.value
    declarant_cpf_dataDeclarant.value = declarant_cpf_start.value

}

function replyDeclarantDataReply(){
    const declarant_name_start = document.getElementById("declarant_name_start")
    const declarant_cpf_start = document.getElementById("declarant_cpf_start")
    
    const declarant_name_dataDeclarant = document.getElementById("declarant_name_dataDeclarant")
    const declarant_cpf_dataDeclarant = document.getElementById("declarant_cpf_dataDeclarant")

    declarant_name_start.value = declarant_name_dataDeclarant.value
    declarant_cpf_start.value = declarant_cpf_dataDeclarant.value

}



// funções  p/ BUSCAr CEP AUTOMATICO
// declarant_cep
// declarant_city
// declarant_state
// declarant_address
// declarant_complement

    
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};


// service_name
// service_price
{/* 
[
  {item: "Tarifa aérea",price: "R$ 150,00"},
  {item: "Flores",price: "R$ 150,00"},
  {item: "Outros gastos",price: "R$ 150,00"},
  {item: "Combustível",price: "R$ 150,00"},
  {item: "Estacionamento SVO",price: "R$ 150,00"},
  {item: "Contratação PMSP (bromélia) Liquidação Direta",price: "R$ 150,00"},
  {item: "Contratação PMSP (Açucena)",price: "R$ 150,00"},
  {item: "Contratação PMSP (Petúnia)",price: "R$ 150,00"},
  {item: "Contratação PMSP (Jasmin)",price: "R$ 150,00"},
  {item: "Motorista",price: "R$ 150,00"},
  {item: "Viagem",price: "R$ 150,00"},
  {item: "Indicação (Rabecão)",price: "R$ 150,00"},
  {item: "Indicação (Agência)",price: "R$ 150,00"},
  {item: "Indicação (Hospital)",price: "R$ 150,00"},
  {item: "Indicação (Motorista)",price: "R$ 150,00"},
  {item: "Tanato",price: "R$ 150,00"},
  {item: "Tanato + ornamentação",price: "R$ 150,00"},
  {item: "Comissão Agência",price: "R$ 150,00"},
  {item: "Motorista FVB",price: "R$ 150,00"},
  {item: "Cemitério",price: "R$ 150,00"},
  {item: "Comissão Agência / SVO / Vidro",price: "R$ 150,00"},
  {item: "SVO",price: "R$ 150,00"},
  {item: "Taxa ",price: "R$ 150,00"}
]

*/}


function addServices(){
    const services = [
        {item: "Tarifa aérea",price: "250,00"},
        {item: "Flores",price: "150,00"},
        {item: "Outros gastos",price: "150,00"},
        {item: "Combustível",price: "150,00"},
        {item: "Estacionamento SVO",price: "150,00"},
        {item: "Contratação PMSP (bromélia) Liquidação Direta",price: "150,00"},
        {item: "Contratação PMSP (Açucena)",price: "150,00"},
        {item: "Contratação PMSP (Petúnia)",price: "150,00"},
        {item: "Contratação PMSP (Jasmin)",price: "150,00"},
        {item: "Motorista",price: "150,00"},
        {item: "Viagem",price: "150,00"},
        {item: "Indicação (Rabecão)",price: "150,00"},
        {item: "Indicação (Agência)",price: "150,00"},
        {item: "Indicação (Hospital)",price: "150,00"},
        {item: "Indicação (Motorista)",price: "150,00"},
        {item: "Tanato",price: "150,00"},
        {item: "Tanato + ornamentação",price: "150,00"},
        {item: "Comissão Agência",price: "150,00"},
        {item: "Motorista FVB",price: "150,00"},
        {item: "Cemitério",price: "150,00"},
        {item: "Comissão Agência / SVO / Vidro",price: "150,00"},
        {item: "SVO",price: "150,00"},
        {item: "Taxa ",price: "150,00"}
    ]

    const select = document.getElementById('services_serviceSelled').value
    const name = document.getElementById('service_name')
    const price = document.getElementById('service_price')

    services.map(service => {
        if(service.item == select){
            name.value = service.item
            price.value = service.price
        }
    })
    
    name.value = select
}




var serviceList = [] //lista dos serviços
const custeOfServices = document.getElementById("custe-of-services") // campo da tabela para o valor total dos serviços

function addServiceOnTable(){
    const table = document.getElementById('table-services')
    table.innerHTML = ""

    const name = document.getElementById('service_name')
    const price = document.getElementById('service_price')

    if(name.value == "" || price.value == "")
        return
    

    serviceList.push({item: name.value, price: price.value})
    
    serviceList.map((service, index) => {
        table.innerHTML +=
        `<div class='services'>
            <div class='info'>
                <input name='service_name_info' value='${service.item}' style='margin-right: 10px; width: 260px;'/>                    
                <input name='service_price_info' value='R$ ${service.price}' /> 
            </div>
            <div class='service-actions' onclick='removeServiceTable(${index})'>
                <i class="fas fa-trash"></i>
            </div>
        </div>`
    })
    calculateTotal()
    // name.value = ""
    // price.value = ""
}

function removeServiceTable(id){
    serviceList.splice(id, 1);
    const table = document.getElementById('table-services')
    table.innerHTML = ""

    serviceList.map((service, index) => {
        table.innerHTML +=
        `<div class='services'>
            <div class='info'>
                <input name='service_name_info' value='${service.item}' style='margin-right: 10px; width: 260px;'/>                    
                <input name='service_price_info' value='R$ ${service.price}' />                    
            </div>
            <div class='service-actions' onclick='removeServiceTable(${index})'>
                <i class="fas fa-trash"></i>
            </div>
        </div>`
    })

    calculateTotal()
}

function calculateTotal(){
    // INPUTS
    const servicesAdvice = document.getElementById('services_advice')
    const servicesRates = document.getElementById('services_rates')
    
    // CAMPOS DA TABELA
    const valueOfSell = document.getElementById('value-of-sell')
    const taxes = document.getElementById("taxes")
    const taxesAdverses = document.getElementById("taxes-adverses")    
    const profit = document.getElementById("profit")
  
    // TIRANDO OS 8% 
    const taxesUpperAdvices = Number(getMoney(servicesAdvice.value)) * 8 / 100
    const adversesTaxesUpperAdvices = Number(getMoney(servicesAdvice.value)) * Number(servicesRates.value) / 100
    
    
    calculateTotalService()
    
    valueOfSell.innerText = `R$ ${servicesAdvice.value}` // valor da venda
    taxes.innerText = taxesUpperAdvices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) // impostos 8%
    taxesAdverses.innerText = adversesTaxesUpperAdvices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) // valor da asessoria em cima das taxas adversas
    const totalOfServices = Number(getMoney(custeOfServices.innerText))

    const totalAdvice = Number(getMoney(servicesAdvice.value))
    const profitTotal = totalAdvice - (taxesUpperAdvices + adversesTaxesUpperAdvices + totalOfServices)

    profit.innerText = profitTotal.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })


    document.getElementById("input_taxes").value = taxesUpperAdvices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
    document.getElementById("input_taxes_adverses").value = adversesTaxesUpperAdvices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
    document.getElementById("input_custe_of_services").value = totalOfServices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
    document.getElementById("input_profit").value = profitTotal.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
}

function calculateTotalService(){
    var totalServices = 0 // valor total dos serviços

    serviceList.map(service => {
        totalServices += Number(getMoney(service.price))
    })

    custeOfServices.innerText = totalServices.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }) // TOTAL de todos os serviços
}

function getMoney(str) {
    return str
        .toString()
        .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
        .replace(',', '.');      // Troca o separador decimal (`,` -> `.`)
}


function deleteRegister(username, token, id){

    if(window.confirm("Você realmente quer excluir este documento?")){
        window.location=`/delete-sell/${username}/${token}/${id}`
    }
}
