import React from 'react';
import UserServices from '../services/UserService';

class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserServices.getUsers().then((response)=>{
            this.setState({users: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = "text.center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>Fisrt Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Mobile Number</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.firstName}</td>
                                  <td>{user.lastName}</td>
                                  <td>{user.emailId}</td>
                                  <td>{user.mobileNo}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default UserComponent