import HeartIcon from '@icons/heart-straight.svg'
import '@css/auth-forms.css';

export default function LoginHospital() {
  return (
    <section>
      <h1>Login to your hospital <img src={HeartIcon} style="width: 2.5rem; vertical-align: top;" /></h1>
      <p style="text-align: center;">Welcome back!</p>
      <form>
      
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            aria-required="true"
          />
        </label>
        
        <label>
          Password
          <input
            type="password"
            name="password"
            required
            aria-required="true"
          />
        </label>
        
        <label>
          <input
              type="checkbox"
              name="remember"
            /> Remember me
        </label>
        
        <br />
        <input type="submit" value="Login" />
      </form>
      <a href="/contact">Forgot your Password or Lost Email?</a>
      <br />
      <a href="/signup-hospital">Don't have an account? Register now for free!</a>
      
    </section>
  )
}
