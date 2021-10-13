db.produtos.updateOne(
  { nome: "Big Mac" }, 
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, curtidas: true },
);
