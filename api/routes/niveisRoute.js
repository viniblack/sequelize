const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router
  .get("/niveis", NivelController.pegaTodosOsNiveis)
  .get("/niveis/:id", NivelController.pegaUmNivel)
  .post("/niveis", NivelController.criarNivel)
  .put("/niveis/:id", NivelController.atualizarNivel)
  .delete("/niveis/:id", NivelController.apagarNivel)
  .post("/niveis/:id/restaura", NivelController.restauraNivel);

module.exports = router;
