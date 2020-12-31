class Inventory {
  constructor(
    group_ID,
    inventory_collection_ID,
    inventory_collection_name,
    inventory_collection_items,
    date_issued,
    in_use,
    purpose
  ) {
    this.group_ID = group_ID;
    this.inventory_collection_ID = inventory_collection_ID;
    this.inventory_collection_name = inventory_collection_name; //updatable
    this.inventory_collection_items = inventory_collection_items; //updatable
    this.date_issued = date_issued;
    this.in_use = in_use; //updatable
    this.purpose = purpose; //updatable
  }
}

export default Inventory;
