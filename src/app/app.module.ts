import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { stepperReducer } from './store/stepper/stepper.reducer';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';

@NgModule({
  declarations: [AppComponent, StepperComponent, StepComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ stepper: stepperReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
