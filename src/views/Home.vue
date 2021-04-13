<template>
  <Header1></Header1>
  <div class="Home">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner bg-dark">
        <div class="carousel-item active ">
          <img src="@/assets/images/hotelRoom12.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>AMY LODGE</h5>
            <p>Amy Lodge. More Than Just Luxury</p>
          </div>
        </div>
        <div class="carousel-item ">
          <img src="@/assets/images/hotelRoom12.jpg" class="d-block  w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>AMY LODGE</h5>
            <p>Amy Lodge. More Than Just Luxury</p>
          </div>
        </div>
        <div class="carousel-item ">
          <img src="@/assets/images/hotelRoom12.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>AMY LODGE</h5>
            <p>Amy Lodge. More Than Just Luxury</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>
    </div>

    <div class="input">
      <div>
          <input class="input1" type="date" name=""  value="" placeholder="Date in">
          <input class="input1" type="text" name=""  placeholder="Number of Nights">
          <input class="input1" type="text" name=""  placeholder="number of people">
          <router-link to="Availablerooms" ><button type="submit" class="btn btn-dark check">Check Availability</button></router-link>
      </div>
    </div>

    <div class="discountSession" id="desktopView">
      <div class="discountText">
        <h2><span>Flash Deals</span></h2>
        <h2><span>Get Up To </span></h2>
        <h2><span>50% </span></h2>
        <h2><span>Off Rooms</span></h2>
      </div>
      <div class="discount">
        <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImages" id="discountImages1" style="margin-top:5rem">
      </div>
      <div>
        <img src="@/assets/images/hotelRoom7.jpg" alt="" class="discountImages" id="discountImages2">
      </div>
      <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImages" id="discountImages3" style="margin-top:5rem">
      </div>
      </div>
      
      <div class="discount">
      <div>
        <img src="@/assets/images/hotelRoom7.jpg" alt="" class="discountImages" id="discountImages4" style="">
      </div>
      </div>
      
    </div>

    <div class="discountSession2" id="mobileView">
      <div class="discountText2">
        <h2><span>Flash Deals</span></h2>
        <h2><span>Get Up To </span></h2>
        <h2><span>50% </span></h2>
        <h2><span>Off Rooms</span></h2>
      </div>
      <div class="discount2">
        <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImg">
      </div>
      <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImg">
      </div>
      <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImg">
      </div>
      <div>
        <img src="@/assets/images/hotelRoom5.jpg" alt="" class="discountImg">
      </div>
      </div>
      
    </div>

    <div class="image-section testimonial marginTop">
      <div class="">
        <div class="testimonial-heading">
        <p>TESTIMONIAL</p>
      </div>
      <div class="inner-testimonial">
    <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner bg-transparent">
        <div class="carousel-item active pt-5">
          <img src="@/assets/images/jared.png" class="d-blocks w-100" alt="...">
          <div class="carousel-caption d-md-block" id="carousel-caption">
            <div>JOSH BUSH</div>
          </div>
          <div>
            <div><span>Arrived on Tuesday for a day but</span></div> 
            <div><span>stayed an extra day. It’s really a resort.</span></div> 
            <div><span> Am impressed that most facilities are still okay.</span></div>
          </div>
          
        </div>
        <div class="carousel-item pt-5">
          <img src="@/assets/images/jared.png" class="d-blocks  w-100" alt="...">
          <div class="carousel-caption d-md-block pl-5">
            <div style="padding-top:20rem"><span>ROBERTS STEVE</span></div>
            <div><span>I recommend this hotel.</span> </div>
            <div><span>The hotel was good and i had a</span></div>
            <div><span>splendid experience at the Golf resort.</span></div>
            <div><span>It deserves another visit.</span></div>
          </div>
        </div>
        <div class="carousel-item pt-5">
          <img src="@/assets/images/jared.png" class="d-blocks w-100" alt="...">
          <div class="carousel-caption d-md-block pl-5">
            <div><span>BRIAN SHERLOCKS</span></div>
            <div><span>I recommend this hotel.</span></div> 
            <div><span>It's always good to be back here.</span></div>
            <div><span>Very helpful staff and the barman</span></div>
            <div><span>was really great</span></div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </a>
    </div>
  <div class="guest" >
    <div>
      <h1>GUEST BOOK</h1>
      <p>Your FeedBack Is Important To Us</p>
      <button type="submit" class="btn btn-dark reviewBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">MAKE A REVIEW</button>
    </div>
  </div>
      </div>
      <!-- <div class="d-flex">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/images/jared.png" class="d-block w-100" alt="..." id="carousel_image">
      <div class="carousel-caption d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/images/jared.png" class="d-block w-100" alt="..." id="carousel_image">
      <div class="carousel-caption d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/images/jared.png" class="d-block w-100" alt="..." id="carousel_image">
      <div class="carousel-caption d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="guest" >
    <div>
      <h1>GUEST BOOK</h1>
      <p>Your FeedBack Is Important To Us</p>
      <button type="submit" class="btn btn-dark reviewBtn">MAKE A REVIEW</button>
    </div>
  </div>
      </div> -->
    
      </div>        
    </div>
    <session class="GuestReviewModal">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Book A Room</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3 NameNmber">
                        <div>
                            <label for="recipient-name" class="col-form-label">Full Name:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div>
                            <label for="recipient-name" class="col-form-label">Phone Number:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                    </div>
                    <div class="mb-3 EmailDate">
                        <div>
                            <label for="recipient-name" class="col-form-label">Email:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div>
                            <label for="recipient-name" class="col-form-label">Check-in-date:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                    </div>
                    <div class="mb-3 Review">
                        <textarea name="" id="" cols="58" rows="5" placeholder="Review"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
        </div>
    </session>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header1,
    Footer
  }
}
</script>
<style scoped>
*{
  margin: 0rem;
}
#desktopView{
  display: block;
}
#mobileView{
  display: none;
}
.Home{
  font-family: "poppins";
  margin-top: -1.4rem;
}
.carousel-inner{
  height: 50vh;
}
.d-block{
  height: 70vh;
  /* background-color:rgba(73, 175, 80, 0.3) ;
  background-blend-mode: overlay; */
}
#carousel-caption{
  padding-left:10rem !important;
}
#carouselExampleCaptions2{
  margin-top: 5rem
}
.guest{
  margin-top: 5rem;
  text-align: right;
  color: white
}
.discount{
  display: inline-flex;
  padding: 7rem 0rem 5rem 0rem;  
}
.discount2{
  display: inline-flex;
  margin: 2rem 0rem 2rem 10rem
}
.discountText{
  position: absolute;
  margin-top: 14.7rem;
  margin-left: 37.5rem;
  font-family: "poppins";
  color: black;
}
.discountText2{
  text-align: center;
}
.discountImages{
  width: 80%;
  margin: 0rem 0rem 0rem 2.5rem;
}
#discountImages2{
  margin-top:-3rem
}
#discountImages4{
margin-top:-20rem; 
margin-left:33.5rem;
width:22%;
}
.discountImg{
  width: 90%;
}
.discountSession{
  /* justify-content: space-around; */
  margin-top: 3rem;
  height: 41rem;
  /* padding-bottom: -7rem; */
  background-color: rgb(245, 236, 236);
}
.d-blocks{
  height: 25vh;
  width:50% !important;
  border-radius:50%;
}
.input{
  text-align: center;
  position:relative;
  /* width: 50rem; */
  margin-top: -2.5rem;
  /* background-color:white; */
}
.check{
  background-color: orangered;
  padding:1.1rem;
  border-color:orangered;
  color:white
}
.input1{
  margin: 0rem 1rem 0rem 1rem;
  padding: 1.5rem;
  border-color:orangered;
}
.carousel-item1{
  background-image: url('../assets/images/hotelRoom11.jpg');
}
.carousel-item2{
  background-image: url('../assets/images/hotelRoom11.jpg');
}
.carousel-item3{
  background-image: url('../assets/images/hotelRoom11.jpg');
}
.carousel-caption h5{
  font-size: 3.5rem;
  color: orangered;
  margin-top:-20rem
}
.carousel-caption p{
  font-size: 1.5rem;
  font-weight: 500
}

.d-flex{
  justify-content: space-around;
}
#carousel_image{
  width:150%
}
.testimonial{
  background-image: url(../assets/images/executiveSuites.png);
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  height:35rem;
  /* padding:10rem 10rem 10rem 10rem */
  margin: 7rem 0rem 0rem 0rem ;
  background-attachment: fixed;
}
.inner-testimonial{
  /* margin-left:10rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/* .inner-carousel{
height: 35rem;
} */
.testimonial-heading{
  text-align: center;
  font-weight:500;
  font-size: 3rem;
  color: orangered;
  padding-top: 2rem
}
.flex-img{
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 0rem 0rem 0rem 6rem
}
.imgg{
  border-radius: 50%;
  width:50%;
  height: 70%
}
.testimonial-text{
  font-weight: 500;
  color:whitesmoke
}
.reviewBtn{
  background-color: orangered;
  border-color: orangered;
  margin: 4rem 0rem 0rem 0rem;
}
.NameNmber{
  display: flex;
  width:100%;
  justify-content: space-between;
}
.EmailDate{
  display: flex;
  justify-content: space-between;
}
@media (max-width:320px) {
  .testimonial{
    /* height:55rem; */
  }
  /* .flex-img{
  display: inline;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 0rem 0rem 0rem 10rem;
} */
.Home{
  font-family: "poppins";
  margin-top: 0.2rem;
}
.carousel_image{
  width:100%,

}
.testimonial{
  background-image: url(../assets/images/executiveSuites.png);
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  height:55rem;
  padding:0rem 0rem 0rem 1.5rem;
  margin: 7rem 0rem 0rem 0rem ;
  background-attachment: fixed;
}
/* .imgg{
      margin-left: 4rem;
} */
.testimonial-heading{
  text-align: center;
  font-weight:500;
  font-size: 2rem;
  color: orangered;
  padding-top: 2rem
}
#desktopView{
  display: none;
}
#mobileView{
  display: block;
}
.discount2{
  display: inline-flex;
  margin: 2rem 0rem 2rem 0.9rem
}
.discountText2{
  text-align: center;
  margin-top: 5rem;
  color: orangered;
}
.input1{
  margin: 0rem 1rem 0rem 1rem;
  padding: 1.5rem;
  border-color:orangered;
  width:60%
}
.check{
  background-color: orangered;
  padding:1.1rem;
  border-color:orangered;
  color:black;
  width:60%;
  margin-top:1rem
}
.inner-testimonial{
  margin-left:0rem
}
}
@media (min-width:321px) and (max-width:576px) {
  .imgg{
      margin-left: 5rem;
}
#desktopView{
  display: none;
}
#mobileView{
  display: block;
}
.discount2{
  display: inline-flex;
  margin: 2rem 0rem 2rem 0.7rem
}
.discountText2{
  text-align: center;
  margin-top: 5rem;
  color: orangered;
}
.reviewBtn{
  background-color: orangered;
  border-color: orangered;
  margin: 1rem 0rem 0rem 0rem;
}
.input1{
  margin: 0rem 1rem 0rem 1rem;
  padding: 1.5rem;
  border-color:orangered;
  width:60%
}
.check{
  background-color: orangered;
  padding:1.1rem;
  border-color:orangered;
  color:black;
  width:60%;
  margin-top:1rem
}
.inner-testimonial{
  margin-left:0rem
}
.testimonial{
  background-image: url(../assets/images/executiveSuites.png);
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  height:45rem;
  /* padding:10rem 10rem 10rem 10rem */
  margin: 7rem 0rem 0rem 0rem ;
  background-attachment: fixed;
}
}
@media (min-width:768px) and (max-width:769px) {
  .input1{
  margin: 0rem 0.2rem 0rem 0.2rem;
  padding: 1.5rem;
  border-color:orangered;
  width:25%
}
/* .imgg{
      margin-left: 2rem;
} */
/* .flex-img{
  display: inline-flex;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 0rem 0rem 0rem 4rem;
} */
.testimonial{
  background-image: url(../assets/images/executiveSuites.png);
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  height:35rem;
  padding:0rem 0rem 0rem 1.5rem;
  margin: 7rem 0rem 0rem 0rem ;
  background-attachment: fixed;
}
#discountImages4{
margin-top:-13rem; 
margin-left:20rem;
width:22%;
}
#discountImages2{
  margin-top:-1.5rem
}
.discount{
  display: inline-flex;
  padding: 3rem 0rem 5rem 0rem;  
}
.discountSession{
  /* justify-content: space-around; */
  margin-top: 3rem;
  height: 26rem;
  /* padding-bottom: -7rem; */
  background-color: rgb(245, 236, 236);
}
.discountText{
  position: absolute;
  margin-top: 8.1rem;
  margin-left: 20.5rem;
  font-family: "poppins";
  color: orangered;
}
}
</style>