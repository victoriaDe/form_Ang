import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {FieldErrorDisplayComponent} from './error/field-error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
