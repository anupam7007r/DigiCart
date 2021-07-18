import './myregister.css';

const Register = () => {

    return (
        <div className="my-card-1">
            <h3 className="title">Register Here</h3>
            <hr />

            <form>

                <label htmlFor="">Name</label>
                <input className="form-control" autoFocus type="text" placeholder="Your Name" required/>

                <label htmlFor="">Date Of Birth</label>
                <input className="form-control" autoFocus type="date" required/>

                <label htmlFor="">Email</label>
                <input className="form-control" autoFocus type="text" placeholder="Email" required/>

                <label htmlFor="">Password</label>
                <input className="form-control" type="password" placeholder="Password" required/>

                <label htmlFor=""> Confirm Password</label>
                <input className="form-control" type="password" placeholder="Confirm Password"  required/>

                <button className="btn btn-outline-success mt-5">SignUp</button>

            </form>


        </div>
    )
}

export default Register;