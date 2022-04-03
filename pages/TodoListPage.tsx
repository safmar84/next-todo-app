import TodoList from '../components/TodoList'
import useFetch from '../hooks/useFetch'
import { Todo } from '../types/types'


const TodoListPage = (): JSX.Element => {

  const response = useFetch<Array<Todo>>('/api/todos')

  switch (response.type) {
    case 'ERROR':
      return (<>Error! {response.message}</>)
    case 'LOADING':
      return (<>Loading...</>)
    case 'SUCCESS':
      return (
        <TodoList todos={response.data} />
      )
    case 'NO_DATA':
      return (<>No Data...</>)
  }
}

export default TodoListPage
