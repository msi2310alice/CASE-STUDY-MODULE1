class Transaction{
    constructor(
        id, 
        transactionType, 
        lotId, 
        transactionQuantity, 
        transactionDate
    ){
        this.id = id; 
        this.transactionType = transactionType;
        this.lotId = lotId;
        this.transactionQuantity = transactionQuantity;
        this.transactionDate = transactionDate;
        this.note = null;
    }
}