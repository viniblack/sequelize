const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmMatricula
  )
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatricula)
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.pegaMatriculaPorTurma
  )
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas)
  .post("/pessoas", PessoaController.criarPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
  .put("/pessoas/:id", PessoaController.atualizarPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizarMatricula
  )
  .delete("/pessoas/:id", PessoaController.apagarPessoa)
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagarMatricula
  );

module.exports = router;
