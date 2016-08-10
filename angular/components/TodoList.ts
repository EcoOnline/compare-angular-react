import {Component} from '@angular/core'
import TodoStore from '../store'
import Todo from './todo'

@Component({
	selector: 'TodoList',
	template: `
		<ul class="pure-menu-list">
			<Todo *ngFor="let todo of todos" [todo]="todo"></Todo>
		</ul>
	`,
	directives: [Todo]
})
class TodoList {
	store = TodoStore;
	todos = this.store.getState()

	constructor () {
		this.store.subscribe(() => {
			this.todos = this.store.getState();
		})
	}
}

export default TodoList
