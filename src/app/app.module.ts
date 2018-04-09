import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';

import { ResourceDefinition, NgrxJsonApiModule } from './ngrx-json-api-master';
import { HttpClientModule } from '@angular/common/http';
const resourceDefinitions: Array<ResourceDefinition> = [
  { type: 'User', collectionPath: 'api' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({} as ActionReducerMap<any>),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    NgrxJsonApiModule.configure({
      apiUrl: 'https://randomuser.me',
      resourceDefinitions: resourceDefinitions
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
