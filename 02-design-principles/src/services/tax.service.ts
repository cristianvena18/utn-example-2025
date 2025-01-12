
class TaxService {
    calculateTax(price: number): number {
        return price * 0.2;
    }
}

export { TaxService };
export default new TaxService();