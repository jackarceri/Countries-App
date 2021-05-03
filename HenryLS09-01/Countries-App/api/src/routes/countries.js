const axios = require("axios");
const { Router } = require("express");
const { Countries, Activities } = require("../db.js");
const { Op } = require("sequelize"); //////importo operaciones de sequelize

const router = Router();

router.get("/", async (req, res, next) => {
    if (req.query.name) {
    let name = req.query.name.charAt(0).toUpperCase()+req.query.name.slice(1);
    try {
      const response = await Countries.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
        include: { model: Activities, required: false },
      });

      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
  return next();
});

router.get("/", async (req, res) => {
    try {
      const response = await Countries.findAll()
      res.status(200).send(response);
    }catch (error) {
      res.send({error})
    }finally{
      console.log('Listos todos los paises')
    }  
  })

  
///Query by ID
router.get("/:id", async (req, res) => {
  const country = await Countries.findOne({
    where: { id: req.params.id },
    attributes: [
      "id",
      "name",
      "flag",
      "continent",
      "capital",
      "subRegion",
      "area",
      "population",
    ],
    include: { model: Activities },
  });
  res.json(country);
});

///Query by Name

router.get("/:name", async (req, res) => {
  const countries = await Countries.findOne({
    where: { countries: req.params.name },
    attributes: [
      "id",
      "name",
      "flag",
      "continent",
      "capital",
      "subRegion",
      "area",
      "population",
    ],
    include: { model: Activities },
  });
  res.json(countries);
});

module.exports = router;
