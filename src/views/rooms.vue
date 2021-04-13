<template>
<Header2></Header2>
    <div class="Room">
        <div class="desktopView">
            <div class="row container presidential">
            <div class="col-sm-6 col-lg-6 col-md-6">
                <img src="@/assets/images/hotelRoom9.jpg" alt="" class="presidential-image">
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6">
                    <h1 class="presidential-heading">Presidential Suite</h1>
                <div class="presidential-suite-card"> 
                    <div><span> Refreshing and relaxing is the Deluxe room,</span> </div>
                    <div><span>  giving you the palm tree forest or swimming pool view. </span></div>
                    <div><span>Our Deluxe room is available in King or Twin beds with the following:</span></div>
                    
                    <div class="presidential-spec">You also get:</div>
                    <div class="presidential-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="presidential-suite-booking">
                       <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>

                </div>
            </div>
        </div>

        <section class=" container executive-suite">
        <div class="row executive-suite-overview">
            <div class="col-sm-6 executive-suite-details">
                <div class="executive-suite-title"><h1>Executive suite</h1></div>
                <div class="executive-suite-card">
                    <div class="executive-suite-heading">Spacious, bright and airy. This room has a beautiful view of
                        the ocean.</div>
                    <div class="executive-suite-spec">You also get:</div>
                    <div class="executive-suite-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="executive-suite-booking">
                        <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>
                </div>
            </div>
             <div class="col-sm-6"><img src="@/assets/images/hotelRoom11.jpg" alt="" class="executive-suite-photo"></div>
        </div>
    </section>

    <div class="row container standard-suite-overview">
            <div class="col-sm-6 col-lg-6 col-md-6 standard-suite-img">
                <div class=""><img src="@/assets/images/hotelRoom12.jpg" alt="" class="standard-suite-photo"></div>
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6 standard-suite-details">
                <div class="standard-suite-title"><h1>Standard suite</h1> </div>
                <div class="standard-suite-card">
                    <div class="standard-suite-heading">Spacious, bright and airy. This room has a beautiful view of the
                        ocean.</div>
                    <div class="standard-suite-spec">You also get:</div>
                    <div class="standard-suite-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="standard-suite-booking">
                        <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <div class="mobileView">
            <div class="row container presidential">
            <div class="col-sm-6 col-lg-6 col-md-6">
                <img src="@/assets/images/hotelRoom9.jpg" alt="" class="presidential-image">
            </div>
            <div class="col-sm-6 col-lg-6 col-md-6">
                <h1>Presidential Suite</h1>
                <div class="presidential-suite-card"> 
                    <div><span> Refreshing and relaxing is the Deluxe room,</span> </div>
                    <div><span>  giving you the palm tree forest or swimming pool view. </span></div>
                    <div><span>Our Deluxe room is available in King or Twin beds with the following:</span></div>
                    
                    <div class="presidential-spec">You also get:</div>
                    <div class="presidential-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="presidential-suite-booking">
                        <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>

                </div>
            </div>
        </div>

        <section class=" container executive-suite">
        <div class="row executive-suite-overview">
             <div class="col-sm-6"><img src="@/assets/images/hotelRoom11.jpg" alt="" class="executive-suite-photo"></div>
              <div class="col-sm-6 executive-suite-details">
                <div class="executive-suite-title"><h1>Executive suite</h1></div>
                <div class="executive-suite-card">
                    <div class="executive-suite-heading">Spacious, bright and airy. This room has a beautiful view of
                        the ocean.</div>
                    <div class="executive-suite-spec">You also get:</div>
                    <div class="executive-suite-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="executive-suite-booking">
                        <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="row container standard-suite-overview">
            <div class="col-sm-6 col-lg-6 col-md-6"><img src="@/assets/images/hotelRoom12.jpg" alt="" class="standard-suite-photo"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 standard-suite-details">
                <div class="standard-suite-title"><h1>Standard suite</h1> </div>
                <div class="standard-suite-card">
                    <div class="standard-suite-heading">Spacious, bright and airy. This room has a beautiful view of the
                        ocean.</div>
                    <div class="standard-suite-spec">You also get:</div>
                    <div class="standard-suite-spec-list">
                        <div><span class="icon icon-leaf"></span> Free spa sessions</div>
                        <div><span class="icon icon-dumbbell"></span> Gym access</div>
                        <div><span class="icon icon-champagne"></span> Complementary champagne</div>
                    </div>
                    <div class="standard-suite-booking">
                       <router-link to="Availablerooms"><button  class="btn btn-dark book-now">Book for N200,000</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Header2 from '@/components/Header2.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'rooms',
    components:{
        Header2,
        Footer
    }
}
</script>

<style scoped>
*{
    margin:0px
}
.Room{
    font-family: "poppins";
}
.desktopView{
    display: block;
}
.mobileView{
    display: none;
}
.presidential{
    /* margin-top:rem; */
    /* padding: 20px 0; */
    /* height: 600px; */
    margin: 10rem 0rem 10rem 0rem
}
.presidential-suite-card{
    max-height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 50px;
    font-size: 16px;
    position: absolute;
    left: -50px;
    width:120%;
    /* height:62% */
}
.presidential-suite-card span{
    font-size:23px
}
.presidential-image{
    width:100%
}
.presidential-spec{
    font-weight: 600;
    padding: 5px 0;
    font-size:20px
}
.presidential-spec-list{
      margin:0rem 0rem 3rem 0rem;
      /* padding: 3px 0 */
}
.executive-suite{
    padding-top:14rem
}
.executive-suite-photo{
    width:100%;
    height: 95%;
    position:relative
}
.executive-suite-card{
    right: -50px;
    left: 0px;
    max-height: 600px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 50px;
    font-size: 16px;
    width:120%;
    z-index: 1;
    position: absolute;
}
.executive-suite-heading{
    font-size:23px
}
.executive-suite-spec{
    font-weight: 600;
    padding: 5px 0;
    font-size:20px;
}
.executive-suite-spec-list{
    margin:0rem 0rem 3rem 0rem;
    line-height: 2rem;
}
.standard-suite-photo{
    width:100%;
    height: 95%
}
.standard-suite-card{
    max-height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 50px;
    font-size: 16px;
    position: absolute;
    left: -50px;
    width:120%;
    /* height:62% */
}
.standard-suite-heading{
    font-size:23px
}
.book-now{
    width:100%
}
.standard-suite-spec{
    font-weight: 600;
    padding: 5px 0;
    font-size:20px;
}
.standard-suite-spec-list span{
    margin:0rem 0rem 3rem 0rem;
    line-height: 2rem;
    /* font-size:16px */
}
.standard-suite-spec-list{
    margin: 0rem 0rem 3rem 0rem
}
.standard-suite-overview{
    margin:15rem 0rem 9rem 0rem
}
h1{
    text-align: center;
}
.testimonial-img {
    background-image: url(../assets/images/jared.png);
    background-repeat: no-repeat;
    background-size: contain;
}
@media (max-width: 320px) {
    .mobileView{
        display: block;
    }
    .desktopView{
        display: none;
    }
    .presidential-suite-card{
    max-height: 700px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    position: absolute;
    left: 0px;
    width:100%;
}
    .executive-suite-photo{
        padding-top: 20rem;
    }
    .executive-suite-card{
    right: -50px;
    left: 0px;
    max-height: 600px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    width:100%;
    z-index: 999;
    position: unset;
    /* margin:0rem 0rem -6rem -4rem; */
}
.standard-suite-card{
    max-height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    position: unset;
    /* left: -50px; */
    width:100%;
    /* margin-left:-4rem */
    /* height:62% */
}
.standard-suite-overview{
    margin:7rem 0rem 7rem 0rem
}
.presidential{
    /* margin-top:rem; */
    /* padding: 20px 0; */
    /* height: 600px; */
    margin: 5rem 0rem 10rem 0rem
}
}
@media (min-width:321px) and (max-width:576px){
    .mobileView{
        display: block;
    }
    .desktopView{
        display: none;
    }
    .presidential-image{
        margin:-5rem 0rem 5rem 0rem
    }
    .presidential-suite-card{
    max-height: 700px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    position: unset;
    left: 0px;
    /* margin-top:5rem; */
    width:100%;
}
.executive-suite{
    padding-top:0rem
}
.executive-suite-photo{
    width:100%;
    height: 95%;
    position:relative;
    /* margin-left:1.1rem */
}
.executive-suite-card{
    right: -50px;
    left: 0px;
    max-height: 600px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    width:100%;
    z-index: 999;
    position: unset;
    /* margin:0rem 0rem -6rem -4rem; */
}
.executive-suite-title{
    margin-top: 5rem
}
.standard-suite-card{
    max-height: 500px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 30px;
    font-size: 16px;
    position: unset;
    /* left: -50px; */
    width:100%;
    /* margin-left:-4rem */
    /* height:62% */
}
.standard-suite-photo{
    width:100%;
    height: 95%;
    /* margin-left:1.2rem; */
    padding-bottom:5rem
}
.standard-suite-overview{
    margin:7rem 0rem 7rem 0rem
}
}
@media (min-width:768px) and (max-width:769px) {
  .presidential-suite-card span{
    font-size: 15px;
  }
  .executive-suite-heading{
      font-size:15px
  }
  .standard-suite-heading{
      font-size:15px
  }
  .standard-suite-overview{
    margin: 17rem 0rem 15rem 0rem;
  }
  .presidential-suite-card{
    max-height: 400px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px 18px rgb(0 0 0 / 6%);
    padding: 50px;
    font-size: 16px;
    position: absolute;
    left: -50px;
    width: 120%;
  }
  .presidential{
      margin: 5rem 0rem 0rem 0rem
  }
  .executive-suite{
    padding-top:20rem
}
.standard-suite-overview{
    /* margin:15rem 0rem 9rem 0rem */
}
}
</style>