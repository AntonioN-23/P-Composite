import { PCComponent } from './PCComponent';
 
export class PCBuild extends PCComponent {
  constructor(name, description, tier) {
    super(name, description, 0);
    this.tier = tier;      
    this.children = [];    
  }
 
  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter((c) => c !== component);
  }

  getChildren() {
    return this.children;
  }
 
  getTier() {
    return this.tier;
  }

  getPrice() {
    return this.children.reduce((total, child) => total + child.getPrice(), 0);
  }

  isComposite() {
    return true;
  }
}