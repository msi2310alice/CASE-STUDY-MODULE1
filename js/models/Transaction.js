class Transaction{
    constructor(
        id, 
        transactionType, 
        productId, 
        lotId, 
        transactionQuantity, 
        transactionDate, 
        note
    ){
        this.id = id; 
        this.transactionType = transactionType;
        this.productId = productId;
        this.lotId = lotId;
        this.transactionQuantity = transactionQuantity;
        this.transactionDate = transactionDate;
        this.note = note;
    }
}