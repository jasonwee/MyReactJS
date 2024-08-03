import {useMutation} from "@tanstack/react-query";
import {useRef } from "react";
import {createPost} from "./api/posts";

export function CreatePost({setCurrentPage}) {
  const titleRef = useRef()
  const bodyRef = useRef()
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts", data.id], data)
      queryClient.invalidateQuries(["posts"], {exact: true})
      setCurrentPage(<Post id={data.id} />)
    },
  })


  function handleSubmit(e) {
    e.preventDefault()
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
    })
  }

  return (
    <div>
       {createPostMutation.isError && JSON.stringify(error)}
       <h1>Create Post</h1>
       <form onSubmit={handleSubmit}>

       
    </div>
  )

}
