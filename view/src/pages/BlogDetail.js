import React, { Component } from "react";
import axios from 'axios';



class BlogDetail extends Component{
    componentDidMount(){
        const {articleId} = this.props.match.params
        console.log("detail",articleId);

        axios.get(`/article/${articleId}`)
        .then((response)=>{
            console.log(response.data);
        })
    }
    
    render(){
        return (
            <div>
                <h1>Blog detail</h1>
            </div>
        );
    }
}

export default BlogDetail;