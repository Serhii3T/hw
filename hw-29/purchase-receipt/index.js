
class Product {
  constructor(params = {}) {
    Object.assign(this, {
      pName: null, 
      amount: 1, 
      bought: false
    }, { ...params }); 
  }

  static sortDefault(a, b) {  // чтобы сначала шли некупленные продукты, а потом – купленные
    return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
  }; 
}
Product.prototype.toString = function () {
  return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}`;
}; 


const shopList = [
  { pName: 'Банан', amount: 2 },
  { pName: 'Апельсин', amount: 5, bought: true },
  { pName: 'Молоко', bought: true },
  { pName: 'Груша', amount: 10 }
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  const prod = shopList.find(prod => prod.pName === prodDef.pName); 
  if (!prod) return shopList.push(new Product(prodDef)); 
  prod.amount += prodDef.amount; 
}; 
const printShopList = () => shopList.forEach(
  (prod, i) => console.log(`${i + 1}. ${prod}`)
); 