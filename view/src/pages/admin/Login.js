import React,{ Component } from "react";
import axios from 'axios';


class Login extends Component{
    constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
			loading: false
		};
	}

    handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
        axios
            .post('/login',userData)
            .then((response)=>{
                localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
                
				this.props.history.push('/admin/dashboard');
            })
            .catch((error)=>{
                console.log(error)

            })
            

    }

    render(){

        return (
        <div className="App-header">

            <form>
                <div class="form-group" >
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" onChange={this.handleChange}  type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Login</button>
            </form>

        </div>
        )
    }
}

export default Login;