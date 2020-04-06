'Use Strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository')

// Busca por todos os produtos
exports.get = (req, res, next) => {
   repository.get()
    .then(function(data) {        
       res.status(200).send(data);
    }).catch(function(e) {
        res.status(400).send({ 
            message: 'Falha ao pesquisar os produtos', data: e 
        });
    })
}
// Busca um produto pela sua slug
exports.getBySlug = (req, res, next) => {
    repository.getSlug(req.params.slug)
     .then(function(data) {        
        res.status(200).send(data);
     }).catch(function(e) {
         res.status(400).send({ 
             message: 'Produto não existe', data: e 
         });
     })
 }
 // Busca um produto pelo ID
 exports.getByID = (req, res, next) => {
    repository.getById(req.params.id)
     .then(function(data) {        
        res.status(200).send(data);
     }).catch(function(e) {
         res.status(400).send({ 
             message: 'Produto não existe', data: e 
         });
     })
 }
// Busca os produtos pelo array de TAGS
 exports.getByTag = (req, res, next) => {
   repository.getByTag(req.params.tag)
     .then(function(data) {        
        res.status(200).send(data);
     }).catch(function(e) {
         res.status(400).send({ 
             message: 'Erro ao pesquisar os produtos', data: e 
         });
     })
 }
 
 exports.store = (req, res, next) => {
    repository.create(req.body)
    .then(function(x) {        
        res.status(201).send({ 
            message: 'Produto Cadastrado com sucesso!'
        });
    }).catch(function(e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o produto', data: e 
        });
    })

    
}

exports.put = (req, res, next) => {
   repository.update(req.params.id, req.body) 
   .then(function(x) {        
    res.status(200).send({ 
            message: 'Produto atualizado com sucesso!'
        });
    }).catch(function(e) {
        res.status(400).send({ 
            message: 'Falha ao atualizar o produto', data: e 
        });
    })
}

exports.delete = (req, res, next) => {
    
   repository.delete(req.params.id)
    .then(function(x) {        
        res.status(200).send({ 
            message: 'Produto excluído com sucesso!'
        });
    }).catch(function(e) {
        res.status(400).send({ 
            message: 'Falha ao excluír o produto', data: e 
        });
    })
}