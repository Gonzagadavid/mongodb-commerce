db.produtos.find(
  { nome: { $regex: /Mc/i } },
).count();
