const profesionales = require('../../data/profesionales.json');

const profesionalModel = {
    data: profesionales,
    getAll() {
        return this.data;
    },
    getEnables() {
        return this.data.filter(profesional => profesional.estaHabilitado == true);
    }
}

module.exports = profesionalModel;