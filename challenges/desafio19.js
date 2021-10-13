db.produtos.updateMany(
  {}, 
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
  {},
  {
    _id: false, 
    nome: true, 
    descricao: true,
    descricaoSite: true, 
  },
);
