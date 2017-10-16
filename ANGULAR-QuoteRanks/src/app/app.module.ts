import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
@NgModule({
  declarations: [
    AppComponent,
    NewQuoteComponent,
    AllQuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
