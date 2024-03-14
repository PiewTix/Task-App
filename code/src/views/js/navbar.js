let nav = document.getElementById("nav")
if (nav != undefined) {
    nav.id = "navbar";
    nav.className = " navbar sticky-top navbar-expand-lg bg-light";
    nav.innerHTML = `
    
  <div class="container">
    <a class="navbar-brand" href="/">Todo App</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="todo-list.html">Todo List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register.html">Register</a>
        </li>
      </ul>
    </div>
  </div>
`}


