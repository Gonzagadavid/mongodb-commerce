db.produtos.updateMany(
  {}, 
  { $pull: { ingredientes: "cebola" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
