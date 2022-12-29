interface CRUDService <T,ID>{
  create(dto: T): void;
  read(id: ID):T;
  update(dto:T):void;
  delete(id:ID): void;
}
