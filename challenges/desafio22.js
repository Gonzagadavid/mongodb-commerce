db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { _id: false, nome: true, vendidos: true },
);
