import { memo, MouseEventHandler } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'

import { Todo } from '../types/types'


const TodoListItem = ({ todo, handleOnClick }: { todo: Todo; handleOnClick: MouseEventHandler<HTMLLIElement> | undefined }): JSX.Element => {
	return (
		<ListItem disablePadding onClick={handleOnClick}>
			<ListItemButton>
				<ListItemIcon>
					<TextSnippetIcon />
				</ListItemIcon>
				<ListItemText 
					primary={todo?.title} 
					secondary={`${todo?.description.substring(0,70)} ...`}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default memo(TodoListItem)


//TODO:
// - done, loading, error