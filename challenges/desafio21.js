db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { _id: false, nome: true },
);
