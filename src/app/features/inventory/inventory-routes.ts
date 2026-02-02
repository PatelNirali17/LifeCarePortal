import { Routes } from "@angular/router";
import { ItemStockListComponent } from "./item-stock-list/page/item-stock-list/item-stock-list.component";
import { IssuedItemsComponent } from "./issued-items/page/issued-items/issued-items.component";


export const InventoryRoutesList: Routes = [
    { path: 'itemstocklist', component: ItemStockListComponent, data: { breadcrumb: 'Item Stock List' } },
    { path: 'issueditems', component: IssuedItemsComponent, data: { breadcrumb: 'Issued Items' } },
]