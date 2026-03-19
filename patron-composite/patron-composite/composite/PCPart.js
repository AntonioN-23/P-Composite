import { PCComponent } from './PCComponent';
 
export class PCPart extends PCComponent {
  constructor(name, description, price, category, tier) {
    super(name, description, price);
    this.category = category; 
    this.tier = tier;         
  }
 
  getCategory() {
    return this.category;
  }
 
  getTier() {
    return this.tier;
  }

  isComposite() {
    return false;
  }
}