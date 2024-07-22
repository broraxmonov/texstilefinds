import React from 'react'
import '../css/nav.css'

export default function nav() {
  return (
    <>
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
       <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src=
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F016%2F328%2F589%2Fnon_2x%2Fuzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png&f=1&nofb=1&ipt=b122d3fefe54f8ff9a282dae8bda0c423d37cc1caed3dbc08d877770b6816a38&ipo=images"
                    width="25" height="25" /> Uz
            </button>
            <ul class="dropdown-menu border border-0">
                <li>
                <img src=
"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thejavachip.com%2Fstatic%2Fmedia%2Fru-flag.143e2d2b10c45cd59e9e.png&f=1&nofb=1&ipt=df1f455a0d31b24aa2b531ea9055c2f76b5c7f4a9510177b31fc5cfdf2fa3350&ipo=images"
                    width="25" height="25" /> Ru
                </li>
                <li>
            <img src=
"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fbritish-flag-transparent%2Fbritish-flag-transparent-14.png&f=1&nofb=1&ipt=ea4056e3157ffab363f2b364ad7de591cdb621bd33096a1124977b88313d59bd&ipo=images"
                    width="25" height="25" /> Eng
                </li>
             
                
            </ul>
       </div>
       <div>
          <img width="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freecreatives.com%2Fwp-content%2Fuploads%2F2015%2F04%2Flogo007.png&f=1&nofb=1&ipt=308c53bf87cfbc411107300c5b9a1f60b26fd4e1476862cc3a8135653e2b24fa&ipo=images" alt="" />
       </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <i class="fa-regular fa-user"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><i class="fa-regular fa-user"></i> Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</>
  )
}
