import { Todo } from '../types/types'


let todos: Todo[] = [
  {
    "id": "1",
    "title": "Go shopping",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim purus. In sollicitudin magna orci, bibendum molestie lorem pretium vel. Nullam eget faucibus orci. Donec pulvinar nisi sem, a elementum ante ornare et. Integer cursus ultrices odio, ac faucibus mi dictum non. Etiam efficitur arcu vitae ligula cursus, nec bibendum urna interdum. Praesent lobortis, nisi quis laoreet condimentum, dolor justo condimentum mauris, in pharetra lectus dolor nec velit. Maecenas eu hendrerit nibh. Vivamus tincidunt, nisl at placerat ornare, diam quam tincidunt diam, ut pulvinar odio justo vitae magna. Quisque ut erat purus."
  },
  {
    "id": "2",
    "title": "Job interview",
    "description": "Donec at ligula tristique, tincidunt tellus a, semper velit. Donec eu consectetur metus. Nullam scelerisque nisl placerat dignissim condimentum. Pellentesque porttitor et nunc a porta. Pellentesque commodo laoreet lacus, ornare imperdiet nulla dapibus quis. Proin placerat gravida vestibulum. Maecenas varius, ipsum at accumsan sollicitudin, lectus mi finibus nisi, quis accumsan mauris nunc sit amet quam. Nam sagittis, magna a gravida dapibus, mi sapien tempus metus, ac pulvinar neque velit eget tortor. Duis eget felis interdum, vestibulum sem a, rhoncus magna. Nullam dapibus varius elementum. Suspendisse bibendum turpis nec tortor convallis blandit. Fusce convallis viverra magna non mollis. Mauris blandit et magna at semper. Maecenas nulla eros, rutrum nec metus a, condimentum semper ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse porttitor commodo faucibus."
  },
  {
    "id": "3",
    "title": "Prepare homework",
    "description": "Aliquam eget eros eu eros luctus fermentum ac finibus augue. Nullam consectetur ligula sit amet felis finibus varius. Aliquam interdum viverra lacus quis faucibus. Nam erat turpis, porttitor sed efficitur a, sagittis quis nunc. Duis enim urna, molestie et dui a, condimentum hendrerit mi. Maecenas eleifend augue non massa fringilla, vel viverra lacus euismod. Mauris sapien felis, tincidunt placerat euismod eu, blandit sed leo."
  },
  {
    "id": "4",
    "title": "Prepare delivery",
    "description": "Quisque tincidunt scelerisque libero. Praesent id justo in neque elementum ultrices. Nullam faucibus mi quis velit. Vivamus porttitor turpis ac leo. Nam quis nulla. In dapibus augue non sapien. Fusce consectetuer risus a nunc. Donec quis nibh at felis congue commodo. Nullam faucibus mi quis velit. Aliquam in lorem sit amet leo accumsan lacinia."
  },
  {
    "id": "5",
    "title": "Go sleep",
    "description": "Maecenas libero. Aliquam erat volutpat. Aenean placerat. Duis viverra diam non justo. Nam quis nulla. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Praesent dapibus. In rutrum. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Etiam commodo dui eget wisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Donec iaculis gravida nulla. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aliquam id dolor. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui."
  }
]

export default todos


//TODO:
/* export const deleteTodo = (id: string) => {
  todos = todos.filter((t) => t.id !== id )
} */