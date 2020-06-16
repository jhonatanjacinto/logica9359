function pegaFloat(mensagem)
{
    return parseFloat(prompt(mensagem).replace(/(R\$ |\.)/g, '').replace(',', '.'))
}

function pegaInt(mensagem)
{
    return parseInt(prompt(mensagem).replace(',', '.'))
}

