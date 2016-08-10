import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import AppComponent from './components/app'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

export default AppModule
