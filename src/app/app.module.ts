import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MudaCorDirective } from './components/diretivas/muda-cor.directive';
import { SobreNosRoutingModule } from './components/pages/sobre-nos/sobre-nos-routing.module';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormSearchComponent, MudaCorDirective],
  imports: [SobreNosRoutingModule, BrowserModule, AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
