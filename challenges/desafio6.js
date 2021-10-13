db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, 
  { $push: { ingredientes: "bacon" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
