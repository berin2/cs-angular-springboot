export abstract class BaseComponent {
  public randomId():string {
    return  Math.random() * Math.random()+"-id";
  }
}
