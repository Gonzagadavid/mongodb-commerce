db.produtos.updateMany(
  {}, 
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, criadoPor: true },
);
