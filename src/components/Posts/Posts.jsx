import React, {useState} from 'react';
import axios from "axios";
import './Posts.css'
import CustomButton from "../UI/button/CustomButton";

const Posts = () => {

    const [posts,setPosts]=useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    async function DataFetcher() {
        const response=await axios.get(url);
        setPosts(response.data);
        // return (
        //
        // );
    }
    return (
        <div className="Posts">
            <CustomButton onClick={DataFetcher} style={{flexGrow:0}}>Загрузить посты</CustomButton>

            {posts.length
                ? <div className="PostsWrapper">
                    {posts.map(post => {
                            return (
                                <div className="PostsItem" key={post.id}>
                                    <div className="PostsItemTitle" style={{display: 'flex'}}>
                                        <div>{post.id}</div>
                                        <div style={{marginLeft: '4px'}}>{post.title}</div>
                                    </div>
                                    <div>
                                        {post.body}
                                    </div>
                                </div>)
                        }
                    )}
                </div>
                :<div className="PostsEmpty"> Пока пусто</div>
            }

        </div>
    );
};

export default Posts;