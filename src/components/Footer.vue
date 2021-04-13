<template>
    <div class="Footer">
        <div class="container">
            <div class="inner-footer">
                <div class=" column">
                    <a href="/"><h1>AMY LODGE</h1></a>
                    <p>@2020 Amy lodge. All rights reserved</p>
                </div>
                <div class="">
                    <h1>Company</h1>
                    <p>
                        <a href="About">About</a>
                    </p>
                    <p>
                        <a href="">Terms and Conditions</a>
                    </p>
                    <p>
                        <a href="">Privacy Policy</a>
                    </p>
                </div>
                <div class="">
                    <h1>Contacts</h1>
                    <p>09091120199</p>
                    <p>lagos, Nigeria</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    /* margin:0px */
    /* padding:0px */
}
.Footer{
    background-color: rgb(2, 2, 2) !important;
    color: whitesmoke;
    padding: 2rem 0rem 0rem 0rem;
    margin: 5rem 0rem 0rem 0rem;
    line-height: 2rem;
    font-family: "poppins";
}
.inner-footer{
    display: flex;
    justify-content: space-between;
    /* padding: 0rem 0rem 0rem 0rem */
}
a{
    text-decoration: none;
    color: whitesmoke;
}
a:hover{
    color:black
}
 /* .Footer {
    left: 0;
    bottom: 0;
    color: #ffffff;
    width: 100%;
    background-color: #0A0A0E;
    display: block;
    margin-left: 0;
    padding-left: 10rem;
  } */

  @media (max-width: 320px){
     /* .Footer{
         padding: 2rem 0rem 0rem 0rem;
     } */
    .inner-footer{
        display: inline;
        justify-content: space-between;
        padding: 0rem 6rem 0rem 0rem
}
.Footer{
    background-color: rgb(2, 2, 2) !important;
    color: whitesmoke;
    padding: 2rem 0rem 0rem 0rem;
    margin: 5rem 0rem 0rem 0rem;
    line-height: 1.5rem;
    font-family: "poppins";
}
  }
  @media (min-width: 321px) and (max-width: 576px) {
      .Footer{
         padding: 2rem 0rem 0rem 0rem;
     }
        .inner-footer{
        display: inline;
        justify-content: space-between;
        padding: 0rem 6rem 0rem 0rem
}
.Footer{
    background-color: rgb(2, 2, 2) !important;
    color: whitesmoke;
    padding: 2rem 0rem 0rem 0rem;
    margin: 5rem 0rem 0rem 0rem;
    line-height: 1.5rem;
    font-family: "poppins";
}
  }
  @media (min-width:768px) and (max-width:769px) {
.Footer{
    background-color: rgb(2, 2, 2) !important;
    color: whitesmoke;
    padding: 2rem 0rem 0rem 0rem;
    margin: 5rem 0rem 0rem 0rem;
    line-height: 1.5rem;
    font-family: "poppins";
}
    .inner-footer{
        display: flex;
        justify-content: space-between;
        padding: 0rem 0rem 0rem 0rem
}
  }
</style>