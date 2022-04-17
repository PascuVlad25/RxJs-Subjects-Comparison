import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayCard } from './components';
import { SubjectsService } from './services';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DisplayCard],
  providers: [SubjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
