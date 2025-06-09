export default function RegistrationForm() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Registration Form</legend>

      <label className="label">User Name</label>
      <input type="text" className="input" placeholder="My awesome page" />

      <label className="label">Email Address</label>
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="email" placeholder="mail@site.com" required />
      </label>
      <div className="validator-hint hidden">Enter valid email address</div>
      <div>
        <label className="label">Password</label>
        <input
          type="password"
          className="input validator"
          required
          placeholder="Password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <p className="validator-hint">
          Must be more than 8 characters, including
          <br />
          At least one number
          <br />
          At least one lowercase letter
          <br />
          At least one uppercase letter
        </p>
      </div>
      <div>
        <label className="label">Repeat Password</label>
        <input
          type="password"
          className="input validator"
          required
          placeholder="Password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <p className="validator-hint">
          Must be more than 8 characters, including
          <br />
          At least one number
          <br />
          At least one lowercase letter
          <br />
          At least one uppercase letter
        </p>
      </div>

      <select defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick a role</option>
        <option>User</option>
        <option>Employee</option>
        <option>Administator</option>
      </select>

      <button className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  );
}
