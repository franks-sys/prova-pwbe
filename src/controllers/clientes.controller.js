const clientes = require("../data/clientes.data");
/// Define função utilizada na rota
//req -> Request (Requisição)
//res -> Resposta



const buscar = (req, res) => {
    const cpf = req.params.cpf;

    var user = "";

    clientes.forEach((cliente, index) => {
        if (cliente.cpf === cpf) {
            user = cliente;
        }
    });

    if(user === "") user = "Resultado não encontrado";
    
    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
}

module.exports = {
    buscar,
    cadastrar
};
