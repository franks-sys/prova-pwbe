const pedidos = require("../data/pedidos.data");
/// Define função utilizada na rota
//req -> Request (Requisição)
//res -> Resposta
const listar = (req, res) => {
    res.send(pedidos).end();
};


const buscar = (req, res) => {
    const qtd = req.params.qtd;

    var compra = "";

    pedidos.forEach((pedido, index) => {
        if (pedido.qtd === qtd) {
            compra = pedido;
        }
    });

    if(compra === "") compra = "Item não comprado";
    
    res.send(compra).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    pedidos.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
}

    const alterar = (req, res) => {
        const stats = req.params.stats;
        const compraUpdate = req.body;

        var indice = -1;
        pedidos.forEach((pedido, index) => {
            if(pedido.stats === stats){
                indice = index;
            }
        });

        if(indice === -1){
            res.status(404).end();
        } else {
            Object.keys(compraUpdate).forEach((chave) => {
                pedidos[indice][chave] = compraUpdate[chave];
            });

            res.status(200).end();
        }

    };

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar,

};
