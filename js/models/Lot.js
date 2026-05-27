class Lot{
    constructor(id, productId, productCode, supplierCode, sequence, quantity, importDate, expiryDate, costPrice){
        this.id = id;
        this.productId = productId;
        this.productCode = productCode;
        this.supplierCode = supplierCode;
        this.sequence = sequence;
        this.quantity = quantity;
        this.importDate = importDate;
        this.expiryDate = expiryDate;
        this.costPrice = costPrice;
        this.lotCode = this.getLotCode();
    }
    getLotCode(){
        let expiry = this.expiryDate.split("-").join("").slice(2);
        let sequenceText = String(this.sequence).padStart(3,"0");
        return `${this.productCode}-EXP${expiry}-${this.supplierCode}-${sequenceText}`
    }
}