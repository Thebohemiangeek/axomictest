import React, { useState, useEffect } from "react";
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import Post from '../../components/blog/Post'
import Styles from './Home.module.css';
import SelectNumber from '../../components/SelectNumber'
import PaginationControls from '../../components/PaginationControls'

const GET_POSTS = gql`
query GetPosts($limit: Int!, $page: Int!) {
    posts(pagination: { limit: $limit, page: $page }) {
        data {
            id
            title
            body
          author{
            name
          }
          comments {
              id
            body
          }
        }currentPage
        count
        totalPages
    }
}
`;

function Home() {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: { limit, page },
      });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const changeInput = (e) => {
        setLimit(Number(e));
      };
    return (
        
        <div className={Styles.home}>
            <SelectNumber limit={limit} changeInput={changeInput} />
      <br />
      <PaginationControls
        totalPages={data.posts.totalPages}
        currentPage={data?.posts?.currentPage}
        setPage={setPage}
      />  
 {data.posts.data.map(dog => (
        <Post key={dog.id} node={dog}>
        </Post>
      ))} 
           <h2>Pages  {data?.posts?.totalPages}</h2>

        </div>
    )
}

export default Home;