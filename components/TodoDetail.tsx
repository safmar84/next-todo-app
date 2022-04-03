import Link from 'next/link'
import { 
  AppBar, IconButton, List, ListItem, ListItemIcon,
  ListItemText, Toolbar, Typography 
} from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Todo } from '../types/types'
import { Box } from '@mui/system'


const TodoDetail = ({ todo }: { todo: Todo }): JSX.Element => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Link href={'/'} passHref>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {todo?.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List>
        <ListItem>
          <ListItemIcon>
            <TextSnippetIcon />
          </ListItemIcon>
          <ListItemText
            primary={todo.description}
            secondary={`(id: ${todo.id})`}
          />
        </ListItem>
      </List>
    </>
  )
}

export default TodoDetail
