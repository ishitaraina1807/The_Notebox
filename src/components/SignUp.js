import React from 'react';

const SignUp = () => {
    return (
        <div className="text-center" style={{ color: 'black', backgroundColor: 'white' }}>
            <h1>SignUp</h1>
            <form>
            <label>Name</label>
                <input type="text" placeholder="Enter Name" />

                <label>Email address</label>
                <input type="email" placeholder="Enter email" />

                <label>Password</label>
                <input type="password" placeholder="Password" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;
