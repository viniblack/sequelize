const database = require("../models");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();

      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;

    try {
      const umNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(umNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarNivel(req, res) {
    const novoNivel = req.body;

    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel);

      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizarNivel(req, res) {
    const { id } = req.params;
    const novasInfor = req.body;

    try {
      await database.Niveis.update(novasInfor, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async apagarNivel(req, res) {
    const { id } = req.params;
    
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });

      return res
        .status(200)
        .json({ message: `Nivel com o id ${id} foi deletado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
