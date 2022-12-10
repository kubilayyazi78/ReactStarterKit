import { post, get } from "./request";

export const getPosts = () => get("url");
export const getPostDetail = (id) => get(`url/${id}`);
export const newPost = (data) => post("/post", data);
