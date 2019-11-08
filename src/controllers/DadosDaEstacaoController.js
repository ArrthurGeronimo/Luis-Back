const mongoose = require('mongoose');

const DadosDaEstacao = mongoose.model('DadosDaEstacao');

module.exports = {
	async index(req, res){
		const dadosDaEstacao = await DadosDaEstacao.find();
		return res.json(dadosDaEstacao);
		//return res.json('TESTE')
	},

	async show(req, res){
		const dadosDaEstacao = await DadosDaEstacao.findById(req.params.id);
		return res.json(dadosDaEstacao);
	},

	async store(req, res){
		const dadosDaEstacao = await DadosDaEstacao.create(req.body);
		return res.json(dadosDaEstacao);
		//return res.json(req.body);
	},

	async update(req,res){
		const dadosDaEstacao = await DadosDaEstacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
		return res.json(dadosDaEstacao);
	},

	async destroy(req, res){
		await DadosDaEstacao.findByIdAndRemove(req.params.id);
		return res.json('Deleted');
	}

};