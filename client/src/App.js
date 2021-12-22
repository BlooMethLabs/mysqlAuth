import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section>
      <h1>{this.state.login ? "Login" : "Sign Up"}</h1>
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="username">Your Username</label>
          <input
            name="username"
            onChange={this.handleInputChange}
            value={this.state.username}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            required
          />
        </div>
        <div>
          {!this.state.loading && (
            <button>{this.state.login ? "Login" : "Create Account"}</button>
          )}
          {this.state.loading && <p>Loading...</p>}
          <button type="button" onClick={this.switchAuthModeHandler}>
            {this.state.login
              ? "Create new account"
              : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
