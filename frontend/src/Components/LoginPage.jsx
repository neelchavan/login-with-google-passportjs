import React from "react";

function LoginPage() {
  return (
    <>
      <div class="row" className="mt-5">
        <div className="col-md-3">
          <a
            className="btn btn-outline-dark"
            href="http://localhost:4000/google"
            role="button"
          >
            <img
              width="20px"
              alt="Google sign-in"
              className="mb-3; mr-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            Login with Google
          </a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
