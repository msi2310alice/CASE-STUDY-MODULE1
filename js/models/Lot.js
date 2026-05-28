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
        this.productName=null;
        this.productCategory = null;
        this.productUnit = null;
        this.sequence = null;
        this.lotCode = null;
        this.status = null;
    }
    getAttributes(arrayProducts){
        let itemProduct;
        let nameProduct;
        let categoryProduct;
        let unitProduct;
        for (let i = 0; i<arrayProducts.length; i++){
            if (arrayProducts[i].id === this.productId){
                itemProduct = arrayProducts[i].itemCode;
                nameProduct = arrayProducts[i].name;
                categoryProduct = arrayProducts[i].category;
                unitProduct = arrayProducts[i].unit;
            }
        }
        let attributesOfProduct = [itemProduct,nameProduct,categoryProduct,unitProduct];
        return attributesOfProduct;
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
    getStatus(){
        let statusProduct;
        switch(true){
            case this.quantity==0:
                statusProduct = "Hết hàng";
                break;
            case (this.quantity>0)&&(this.quantity<20):
                statusProduct = "Sắp hết hàng";
                break;
            default:
                statusProduct = "Còn hàng"
        }
        return statusProduct;
    }
    setNullAttributes(arrayLots,arrayProducts){
        let attributes = this.getAttributes(arrayProducts);
        this.productItemCode = attributes[0];
        this.productName = attributes[1];
        this.productCategory = attributes[2];
        this.productUnit = attributes[3];
        this.sequence = this.getSequence(arrayLots);
        this.lotCode = this.getLotCode();
        this.status = this.getStatus();
    }
    
}