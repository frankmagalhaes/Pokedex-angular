import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { PokeHeaderComponent } from "./poke-header/poke-header.component";
import { PokeSearchComponnet } from "./poke-search/poke-search.component";
import { PokeListComponent } from "./poke-list/poke-list.component";


@NgModule ({
    declarations: [
        PokeHeaderComponent,
        PokeSearchComponnet,
        PokeListComponent
    ],
    exports: [
        PokeHeaderComponent,
        PokeSearchComponnet,
        PokeListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }