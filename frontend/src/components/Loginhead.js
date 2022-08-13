import classes from "./Loginhead.module.scss";

function LoginHead() {
  return (
    <div>
      <title className={classes.loginTitle}>Login</title>
      <div>Please enter your Email and  Password</div>
    </div>
  );
}

export default LoginHead;