import './signin.css';

const Signin = () => {

    return (
        <div className="my-card">
            <h3 className="title">Login Here</h3>
            <hr />

            <form>

                <label htmlFor="">Email</label>
                <input className="form-control" autoFocus type="text" required/>  

                <label htmlFor="">Password</label>
                <input className="form-control" type="password" required />

                <button className="btn btn-outline-success mt-5">Login</button>

            </form>


        </div>
    )
}

export default Signin;