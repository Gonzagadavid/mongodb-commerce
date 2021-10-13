db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" }, 
  { $pop: { ingredientes: -1 } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
