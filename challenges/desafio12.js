db.produtos.updateMany(
  {}, 
  { $push: { 
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    }, 
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, valoresNutricionais: true },
);
