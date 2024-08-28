import React from "react";
import App from "../App";
function AdminPanel({user}){
    return(
        <div>
            {user.isAdmin?(
                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, {user.name}! You have admin previlages</p>
                    <button>Add new users</button>
                    <button>Manage Users</button>
                    <button>Manage Settings</button>
                    <button>View Reports</button>
                </div>):(
                    <div>
                    <h1>Guest Dashboard</h1>
                    <p>Welcome, {user.name}! You are not an Admin</p>
                    <button>Update Profile Information</button>
                    <button>Settings</button>
                    </div>)}
        </div>
    );
}

export default AdminPanel;