import { useState } from "react";
import styles from "./signin.module.css";
import Button from "@material-ui/core/Button";
const SignIn = () => {
  const [user, setUser] = useState("");
  const [isUserEmpty, setIsUserEmpty] = useState("");
  return (
    <section className={styles.signin__section}>
      <div className={styles.signin__maindiv}>
        <div className={styles.signin__amazonLogo}>
          <img
            src="https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg"
            alt=""
            className={styles.signin__amazon}
          />
          <span>.in</span>
        </div>
        <div className={styles.signin__content}>
          <h1>Sign-In</h1>
          <div>
            <label>Email or mobile phone number</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Button variant="contained" className={styles.continue__btn}>
              Continue
            </Button>
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
        </div>
        <div className={styles.signin__new}>
          <hr />
          <p>New to Amazon?</p>
        </div>
        <Button variant="contained" className={styles.SignIn__create}>
          Create your Amazon account
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
