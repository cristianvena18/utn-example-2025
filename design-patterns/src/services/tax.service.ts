
class TaxService {
    calculateTax(price: number): number {
        return price * 0.2;
    }
}

export default new TaxService();