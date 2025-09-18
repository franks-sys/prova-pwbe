const itens = require("../data/itens.data");
/// Define função utilizada na rota
//req -> Request (Requisição)
//res -> Resposta

const buscar = (req, res) => {
    const id = req.params.id;

    var stoque = "";

    itens.forEach((item, index) => {
        if (item.id === id) {
            stoque = item;
        }
    });

    if(stoque === "") stoque = "Nao encontrado";
    
    res.send(stoque).end();
};


const cadastrar = (req, res) => {
    const data = req.body;
    itens.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
}

const apagar = (req, res) => {
    const id = req.params.id;
    var indice = -1;
    itens.forEach((item, index) => {
        if(item.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else {
        itens.splice(indice, 1);
        res.status(200).end();
    }

};

    const alterar = (req, res) => {
        const id = req.params.id;
        const stoqueUpdate = req.body;

        var indice = -1;
        itens.forEach((item, index) => {
            if(item.id === id){
                indice = index;
            }
        });

        if(indice === -1){
            res.status(404).end();
        } else {
            Object.keys(stoqueUpdate).forEach((chave) => {
                itens[indice][chave] = stoqueUpdate[chave];
            });

            res.status(200).end();
        }

    };

module.exports = {
    buscar,
    cadastrar,
    apagar, 
    alterar
};
