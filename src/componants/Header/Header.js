import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
  <div class="container-fluid">
    <a className='navbar-brand' href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">About </a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;