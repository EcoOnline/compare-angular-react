import {Component, Input} from '@angular/core'
import {toggleTodo} from '../store'

@Component({
	selector: 'Todo',
	template: `
		<span class="pure-menu-link" [style.text-decoration]="isCompleted()" (click)="toggle()">
		{{todo.text}}
		</span>
	`
})
class Todo {
	@Input() todo
	toggle() {
		toggleTodo(this.todo.id)
	}

	isCompleted() {
		return this.todo.completed ? 'line-through' : 'none'
	}
}

export default Todo
