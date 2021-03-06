import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PageFooter from "../page-footer/page-footer";
import LogoHeader from "../logo-header/logo-header";
import {login} from "../../store/api-actions";

const SignIn = (props) => {
  const {onSubmit} = props;

  const [input, setInput] = useState({
    email: ``,
    password: ``
  });

  const {email, password} = input;

  const handleChange = useCallback(
      (evt) => setInput(Object.assign({}, input, {[evt.target.name]: evt.target.value}))
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: email,
      password
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email"
                onChange={handleChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password"
                onChange={handleChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />

    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
