'Use Strict';
const repository = require('../repositories/product-repository')

// Busca por todos os produtos
 exports.get = async(req, res, next) => {
    try {        
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ 
            message: 'Falha na sua requisição' 
        });
    }
}
// Busca um produto pela sua slug
 exports.getBySlug = async(req, res, next) => {
    try{
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ 
            message: 'Falha na sua requisição'
        });
    }
 }
 // Busca um produto pelo ID
 exports.getByID = async(req, res, next) => {
    
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ 
            message: 'Falha na sua requisição'
        });
    }
 }
// Busca os produtos pelo array de TAGS
 exports.getByTag = async(req, res, next) => {
   try {
       var data = await repository.getByTag(req.params.tag);
       res.status(200).send(data);
   } catch (e) {
       res.status(500).send({ 
            message: 'Falha na sua requisição' 
       });
   }
 }
 
 exports.store = async(req, res, next) => {
    try {
        var data = await repository.create(req.body);
        res.status(201).send({message: 'Produto Cadastrado com sucesso!'})
    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o produto', data: e  
        });
    }
}

 exports.put = async(req, res, next) => {
     
    try {
        var data = await repository.update(req.body);
        res.status(200).send({message: "Produto atualizado com sucesso"})
    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao atualizar o produto', data: e 
        }); 
    }
}

 exports.delete = async(req, res, next) => {

    try {
        var data = await repository.delete(req.params.id);
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao excluír o produto', data: e 
        }); 
    }
}