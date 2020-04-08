'Use Strict';
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

const emailService = require('../services/emailService');

 exports.get = async(req, res, next) => {
    try {        
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ 
            message: 'Falha ao processar sua requisição' 
        });
    }
}

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
 
 exports.store = async(req, res, next) => {
    try {
        var data = await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        emailService.send(
            req.body.email, 
            'Bem vindo ao Node Store',
            'Pode ser'
        );

        res.status(201).send({message: 'Cliente Cadastrado com sucesso!'})
    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o customer', data: data
        });
    }
}

 exports.put = async(req, res, next) => {
     
    try {
        var data = await repository.update(req.body);
        res.status(200).send({message: "Customer atualizado com sucesso"})
    } catch (e) {
        res.status(400).send({ 
            message: 'Falha ao atualizar o customer', data: e 
        }); 
    }
}

 exports.delete = async(req, res, next) => {

    try {
        var data = await repository.delete(req.params.id);
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao excluír o customer', data: e 
        }); 
    }
}