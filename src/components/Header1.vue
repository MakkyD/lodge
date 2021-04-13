<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">AMYLODGE</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <router-link to="/" class="nav-link text-white" >Home</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="rooms" class="nav-link text-white">Rooms</router-link>
        </li>
        <li class="nav-item">
          <router-link to="About" class="nav-link text-white">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="Services" class="nav-link text-white">Services</router-link>
        </li>
         <li class="nav-item">
          <router-link to="facilities" class="nav-link text-white" >Facilities</router-link>
        </li>
        <li class="nav-item">
          <router-link to="Contact" class="nav-link text-white">Contact</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  </div>
</template>
  <style scoped>
      .header{
        /* background-color: black; */
        /* font-size:1.5rem; */
        /* text-align: right; */
        /* padding: 1rem 0rem 1rem 0rem; */
        /* height:2rem */
        font-family: "poppins";
      }
      .links{
        /* padding-left:2rem;
        text-decoration: none;
        color: gray; */
      }
      .links:hover{
        /* color:white */
      }
      .navbar-brand{
        color: white;
      }
      .navbar-brand:hover{
        color: orangered
      }
      .nav-link{
        color:white !important;
        font-weight:600;
        font-size: 1.1rem
      }
      .nav-link:hover{
        color:orangered  !important;
      }
      /* .nav-link:visited{
        color: orangered;
      } */
      .navbar{
            /* animation: menu_sticky 0.60s ease-in-out; */
      }
      @media (max-width:320px) {
        .navbar{
          position:unset;
          /* margin-top: 5rem; */
        }
        .nav-link{
          color: black !important;
        }
        .navbar-brand{
        color: orangered
      }
      }
  </style>