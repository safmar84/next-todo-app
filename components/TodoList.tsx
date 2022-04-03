import { AppBar, Box, List, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

import TodoListItem from './TodoListItem'
import { Todo } from '../types/types'


const TodoList = ({ todos }: { todos: Todo[] }): JSX.Element => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <HomeIcon sx={{ mr: 4 }}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Next TODO application
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List>
        {todos.map((todo) => (
          <TodoListItem
            key={Number(todo.id)}
            todo={todo}
          />
        ))}
      </List>
    </>
  )
}

export default TodoList
