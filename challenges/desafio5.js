db.produtos.updateMany(
  { nome: { $ne: "McChicken" } }, 
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
