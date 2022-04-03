import Link from 'next/link'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'

import { Todo } from '../types/types'


const TodoListItem = ({ todo }: { todo: Todo }): JSX.Element => {

	return (
		<Link href={`/todo-detail/${todo.id}`} passHref>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<TextSnippetIcon />
					</ListItemIcon>
					<ListItemText
						primary={todo.title}
						secondary={`${todo.description.substring(0, 70)} ...`}
					/>
				</ListItemButton>
			</ListItem>
		</Link>
	)
}

export default TodoListItem


// - how to describe return type of curried function

/* type CurriedFn = (id: string) => (name: string) => void

const fn:CurriedFn = (id) => (name) => {
	console.log(id, name)
}

const foo = (id: string) => (name: string) => {
	console.log(id, name)
}

const bar = foo('abc')('name') */