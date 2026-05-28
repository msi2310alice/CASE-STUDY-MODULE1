class Lot{
    constructor(id, productId, supplierCode, quantity, importDate, expiryDate, costPrice){
        this.id = id;
        this.productId = productId;
        this.supplierCode = supplierCode;
        this.quantity = quantity;
        this.importDate = importDate;
        this.expiryDate = expiryDate;
        this.costPrice = costPrice;
        this.productItemCode=null;
        this.sequence = null;
        this.lotCode = null;
    }
    getProductItemCode(arrayProducts){
        let item;
        for (let i = 0; i<products.length; i++){
            if (arrayProducts[i].id === this.productId){
                item = arrayProducts[i].itemCode;
            }
        }
        return item;
    }
    getSequence(arrayLots){
        let count =0;
        for (let i = 0; i < arrayLots.length; i++){
            if (arrayLots[i].productItemCode == this.productItemCode && 
                arrayLots[i].expiryDate == this.expiryDate &&
                arrayLots[i].supplierCode == this.supplierCode ){
                count++;
            }
        }
        return count+1;
    }
    getLotCode(){
        let expiry  = this.expiryDate.split("-").join("").slice(2);
        let sequenceText = String(this.sequence).padStart(3,"0");
        return `${this.productItemCode}-EXP${expiry}-${this.supplierCode}-${sequenceText}`
    }
    setSequenceAndLotCodeAndItem(arrayLots,arrayProducts){
        this.productItemCode = this.getProductItemCode(arrayProducts);
        this.sequence = this.getSequence(arrayLots);
        this.lotCode = this.getLotCode();
    }
}