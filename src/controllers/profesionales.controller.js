const ProfesionalModel = require("../models/profesionales");

const ProfesionalController = {
    getEnables() {
        return {
            msg: "Listado de profesionales habilitados",
            data: ProfesionalModel.getEnables()
        }
    },
    getAllProfesionales () {
        return {
            msg: "Listado general de profesionales",
            data: ProfesionalModel.getAll()
        }
    }
}

module.exports = ProfesionalController;