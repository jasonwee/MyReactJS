import axios from "axios";

export function getPosts() {
  return axios
    .get("http://localhost:3001/api/db.json", {params: { _sort: "title"}})
    .then(res => res.data)

}
