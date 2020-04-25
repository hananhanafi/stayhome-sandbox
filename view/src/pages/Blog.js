import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Blog extends Component{
    constructor(props){
        super(props);

        this.state = {
            articles:'',
            load:true,
        }
    }

    showHandle(data){
        let articleId = data.data.articleId
        console.log(data.data.articleId)
        this.props.history.push(`/blog/${articleId}`)
    }

    componentWillMount = () =>{
        axios.get('/articles')
        .then((response)=>{
            console.log(response.data)
            this.setState({
                articles : Array.from(response.data),
                load:false

            })
        })
    }

    render(){
        {!this.state.load && console.log("berhasil",typeof(Array.from(this.state.articles)))}
        const {articles} = this.state
        return (
            <div>
                <h1>Blog</h1>
                {Object.keys(this.state.articles).map((key)=>{
                    {var data = this.state.articles[key]}
                    return (

                        <div>
                        <Link to={`/blog/${this.state.articles[key]["articleId"]}`}  > 
                            Baca {this.state.articles[key]["title"]}

                        </Link>
                        <button onClick={() => this.showHandle({data})} >
                            buka {this.state.articles[key]["title"]}
                        </button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Blog;