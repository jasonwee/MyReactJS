import {useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const POSTS = [
  {id: 1, title: "Post 1"},
  {id: 2, title: "Post 2"},
]

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorId=1 -> ["posts", { authorId: 1}]
// /posts/2/comments -> ["posts", post.id, "comments"]

function App() {

  const postsQuery = useQuery({
      queryKey: ["posts"],
      queryFn: (obj) => wait(1000).then(() => {
        console.log(obj);
        return [...POSTS]
      })
  })


  if (postsQuery.isLoading) return <h1>Loading</h1> 
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre> 

  return <h1>
       {postsQuery.data.map(post => (
           <div key={post.id}>{post.title}</div>
       ))}
  </h1>
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
