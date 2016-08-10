import {Component} from '@angular/core'
import {addTodo} from '../store'

@Component({
	selector: 'AddTodo',
	template: `
		<form class="pure-form" (submit)="add(text)">
			<fieldset>
				<input [(ngModel)]="text" name="text"/>
	    	<button class="pure-button" type='submit'>
	      	Add Todo
	    	</button>
			</fieldset>
		</form>
	`
})
class AddTodo {
	text = ""
	add(text) {
		if (!text.trim()) return
		this.text = ""
		addTodo(text)
	}
}

export default AddTodo
