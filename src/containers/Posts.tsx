import * as React from 'react';
import SinglePost from '../components/SinglePost';

export default class extends React.Component{

    state = {
        posts : [],
        loading: false,
    }

    componentWillMount() {
        console.log("Component is loading.");
    }

    componentDidMount() {
        this.loadPosts();
    }
    
    loadPosts = async () => { //axios
        this.setState({
            loading: true,
        });

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const posts = await response.json();

        this.setState({
            posts,
            loading: false,
        });
    }

    componentWillUnmount() {
        console.log("Posts :( I'm dying.")
    }

    renderPosts() {
        const {posts} = this.state;
        if(posts.length === 0) {
            return <p>No Posts Yet.</p>
        }

        return posts.map(post => <SinglePost key={post.id} post={post} />)
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>

            { this.state.loading && <p>Loading...</p> }

            { this.renderPosts() }
            </div>
        )
    }
}