import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./navigation/menu/menu.component";
import { HomeComponent } from "./navigation/home/home.component";
import { FooterComponent } from "./navigation/footer/footer.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { APP_BASE_HREF, registerLocaleData } from "@angular/common";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { ProdutoService } from "./produtos/produtos.service";
import { HttpClientModule } from "@angular/common/http";

import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ListaProdutoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [ProdutoService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
