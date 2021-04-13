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
          <router-link to="/" class="nav-link text-white">Home</router-link>
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
          <router-link to="Facilities" class="nav-link text-white">Facilities</router-link>
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
      /* .header{
        background-color: black;
        font-size:1.5rem;
        text-align: right;
        padding: 1rem 0rem 1rem 0rem;
        height:2rem
      }
      .links{
        padding-left:2rem;
        text-decoration: none;
        color: gray;
      }
      .links:hover{
        color:white
      } */
      .header{
        font-family: "poppins";
      }
      .nav-link{
        color:white  !important;
        font-weight:500;
        font-size: 1.1rem;
      }
      .nav-link:hover{
        color:orangered !important
      }
      .navbar-brand{
        color:orangered;
        font-size: 1.7rem;
        font-weight:500
      }
      .navbar-brand:hover{
        color:white
      }
      .navbar{
        box-shadow: 0px 1px 8px rgb(0 0 0 4%);
        border-bottom: 0.125rem solid rgb(206, 196, 196);
        /* border-radius: 1rem; */
        z-index: 500;
        /* background-color: #ffffff !important; */
        background-color: #232323 !important;
            /* transition: all .4s ease-out; */
            
      }
      /* .navbar.fixed-top{
        animation: menu_sticky 0.60s ease-in-out;
      } */
      @media (max-width:320px) {
        .navbar{
          position:unset;
        }
      }
      @media (min-width:321px) and (max-width:576px) {
        .navbar{
          position:unset;
        }
      }
      @media (max-width:768px) {
        .navbar{
          position:unset;
        }
      }
  </style>