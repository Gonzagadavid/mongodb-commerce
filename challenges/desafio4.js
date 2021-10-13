db.produtos.updateMany(
  { nome: "Big Mac" }, 
  { $set: { ultimaModificacao: Date() } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);
