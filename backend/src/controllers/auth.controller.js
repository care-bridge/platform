export const getNavbar = (req, res) => {
  const user = req.session?.user;

  if (user) {
    return res.send(`
      <div class="profile-wrapper">
        
        <div class="profile-icon" onclick="this.nextElementSibling.classList.toggle('show')">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="32" />
        </div>

        <div class="dropdown">
          <p><strong>${user.name}</strong></p>
          <button 
            hx-get="http://localhost:5000/auth/logout"
            hx-target="#auth-section"
            hx-swap="innerHTML"
            hx-credentials="include"
          >
            Logout
          </button>
        </div>

      </div>
    `);
  }

  return res.send(`
    <a href="/login" role="button">Login</a>
  `);
};