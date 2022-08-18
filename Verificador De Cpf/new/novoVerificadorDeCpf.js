var Continue = "S"

while (Continue == "S") {
    var Verifier = "S"
    while (Verifier == "S") {
        var CpfOfClient = prompt(`Informe seu cpf`)

        var CpfFalse0 = 00000000000, 
        CpfFalse1 = 11111111111, 
        CpfFalse2 = 22222222222, 
        CpfFalse3 = 33333333333, 
        CpfFalse4 = 44444444444,
        CpfFalse5 = 55555555555, 
        CpfFalse6 = 66666666666, 
        CpfFalse7 = 77777777777, 
        CpfFalse8 = 88888888888, 
        CpfFalse9 = 99999999999

        if(isNaN(CpfOfClient) || CpfOfClient.length != 11 || 
        CpfOfClient == CpfFalse0 || 
        CpfOfClient == CpfFalse1 || 
        CpfOfClient == CpfFalse2 || 
        CpfOfClient == CpfFalse3 || 
        CpfOfClient == CpfFalse4 || 
        CpfOfClient == CpfFalse5 || 
        CpfOfClient == CpfFalse6 || 
        CpfOfClient == CpfFalse7 || 
        CpfOfClient == CpfFalse8 || 
        CpfOfClient == CpfFalse9){
            alert(`Cpf inválido, digite somente números`)
        } else {
            Verifier = "N"
            alert(`Aguarde um instante para verificarmos o seu cpf`)
        }
    }
    var VerifierOfFirstNumber = 
    CpfOfClient[0] * 10 + CpfOfClient[1] * 9 +
    CpfOfClient[2] * 8 + CpfOfClient[3] * 7 +
    CpfOfClient[4] * 6 + CpfOfClient[5] * 5 +
    CpfOfClient[6] * 4 + CpfOfClient[7] * 3 +
    CpfOfClient[8] * 2
    var FirstCalculation = (VerifierOfFirstNumber * 10) % 11 
    if( FirstCalculation >= 10){
        FirstCalculation = 0
    }
    var VerifierOfSecondNumber =
    CpfOfClient[0] * 11 + CpfOfClient[1] * 10 +
    CpfOfClient[2] * 9 + CpfOfClient[3]* 8 +
    CpfOfClient[4] * 7 + CpfOfClient[5]* 6 +
    CpfOfClient[6] * 5 + CpfOfClient[7]* 4 +
    CpfOfClient[8] * 3 + FirstCalculation * 2
    var SecondCalculation = (VerifierOfSecondNumber * 10) % 11 

    if(SecondCalculation >= 10) {
        SecondCalculation = 0
    }
    if(FirstCalculation == CpfOfClient[9] && SecondCalculation == CpfOfClient[10]){
        switch(parseInt(CpfOfClient[8])) {
            case 0:
                alert(`Seu cpf é ${CpfOfClient}, e foi emitido no estado: Rio Grande Do Sul`)
                break;
            case 1:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins`)
                break;
            case 2:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia`)
                break;
            case 3:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Ceará, Maranhão ou Piauí`)
                break;
            case 4:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte`) 
                break;
            case 5:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Bahia ou Sergipe`)
                break;
            case 6:
                alert(`Seu cpf é ${CpfOfClient}, e foi emitido no estado de: Minas Gerais`)
                break;
            case 7:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Rio de Janeiro ou Espírito Santo`) 
                break;
            case 8:
                alert(`Seu cpf é ${CpfOfClient}, e foi emitido no estado de: São Paulo`)
                break;
            default:
                alert(`Seu cpf é ${CpfOfClient}, e pode ter sido emitido nos estados de: Paraná ou Santa Catarina`)
                break;
        }
    } 
    else {
        alert(`Seu cpf é falso`)
    }
    Continue = prompt(`Deseja verificar mais um cpf? [S]im ou [N]ao`, `S`)
}