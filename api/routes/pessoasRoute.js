const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .post("/pessoas", PessoaController.criarPessoa)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .delete("/pessoas/:id", PessoaController.apagarPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmMatricula
  )
  .post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagarMatricula
  );

module.exports = router;
