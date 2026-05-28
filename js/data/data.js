let products = [];
let lots =[];
let transactions = [];

products[0] = new Product("P001", "AP001", "Táo đỏ", "Trái cây", "kg", 20);
products[1] = new Product("P002", "OR001", "Cam sành", "Trái cây", "kg", 15);
products[2] = new Product("P003", "BA001", "Chuối", "Trái cây", "kg", 30);

lots[0] = new Lot("L001", products[0].id, "VINA", 50, "2026-05-28", "2026-06-10", 30000);
lots[1] = new Lot("L002", products[0].id, "VINA", 40, "2026-05-28", "2026-06-10",28000);
lots[2] = new Lot("L003", products[1].id, "MEKO", 25, "2026-05-28", "2026-06-12", 22000);
lots[3] = new Lot("L004", products[2].id, "DLFRUIT", 60, "2026-05-28", "2026-06-05", 18000);

transactions[0] = new Transaction("T001", "import", lots[0].id, 50, "2026-05-28");
transactions[1] = new Transaction("T002", "import", lots[1].id, 40, "2026-05-28");
transactions[2] = new Transaction("T003", "import", lots[2].id, 25, "2026-05-28");
transactions[3] = new Transaction("T004", "import", lots[3].id, 60,"2026-05-28");

for (let i=0; i<lots.length; i++){
    lots[i].setSequenceAndLotCodeAndItem(lots,products);
}