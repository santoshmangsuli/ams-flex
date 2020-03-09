import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatGridListModule, MatToolbarModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatButtonModule, MatListModule, MatCardModule, MatRadioModule
 } from '@angular/material';
 import {MatExpansionModule} from '@angular/material/expansion';
import { MyToDosComponent } from './my-to-dos/my-to-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    MyToDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
