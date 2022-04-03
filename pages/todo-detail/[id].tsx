import { useRouter } from 'next/router'

import { Todo } from '../../types/types'
import useFetch from '../../hooks/useFetch'
import TodoDetail from '../../components/TodoDetail'


const TodoDetailContainer = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const response = useFetch<Todo>(`/api/todo/${id}`)

  switch (response.type) {
    case 'ERROR':
      return (<>Error! {response.message}</>)
    case 'LOADING':
      return (<>Loading...</>)
    case 'SUCCESS':
      return (
        <TodoDetail todo={response.data} />
      )
    case 'NO_DATA':
      return (<>No Data...</>)
  }
}

export default TodoDetailContainer
