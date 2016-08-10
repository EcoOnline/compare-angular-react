import {Component} from '@angular/core'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

@Component({
	selector: 'app',
	template: `
	<main>
		Angular
		<AddTodo></AddTodo>
		<TodoList></TodoList>
	</main>
	`,
	directives: [AddTodo, TodoList]
})
export class App { }
export default App
