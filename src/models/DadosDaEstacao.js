const mongoose = require('mongoose');

const DadosDaEstacaoSchema = new mongoose.Schema({
    createdAt:{
		type: Date,
		default: Date.now
    },
    updateAt:{
		type: Date,
		default: Date.now
    },
    estacao_id:{
        type: Number
    },
    serial_sensor:{
        type: String
    },
    horario:{
        type: String
    },
    precipitacao:{
        type: Number
    },
    temperaturaAr:{
        type: Number
    },
    umidadeAr:{
        type: Number
    },
    pressaoAr:{
        type: Number
    },
    temperaturaSolo:{
        type: Number
    },
    umidadeSolo:{
        type: Number
    },
    vento:{
        type: Number
    },
    nivelUv:{
        type: Number
    },
    mediaUv:{
        type: Number
    }
});

const DadosDaEstacao = mongoose.model('DadosDaEstacao', DadosDaEstacaoSchema);

module.exports = DadosDaEstacao;