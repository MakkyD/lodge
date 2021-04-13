<template>
      <Header2></Header2>
      <div class="container Facilities">
        <div class="facilities-wrapper">
          <h1 class="Heading">Facilities</h1>
          <!-- image flexbox for the first row -->
          <div class="img-flex">
            <div class="image-section first-image">
              <div class="text">
                Pool
              </div>
            </div>
            <div class="image-section second-image">
              <div class="text">
                Spa
              </div>
            </div>
            <div class="image-section third-image">
              <div class="text">
                Art gallary
              </div>
            </div>
          </div>
    <!-- image flexbox for the second row -->
          <div class="img-flex2">
            <div class="image-section fourth-image">
              <div class="text">
                Gym
              </div>
            </div>
            <div class="image-section fifth-image marginTop">
              <div class="text">
                Bar
              </div>
            </div>
            <div class="image-section sixth-image marginTop">
              <div class="text">
                Golf course
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Header2 from "@/components/Header2.vue"
import Footer from '@/components/Footer.vue'

export default {
  name: "Facilities",
  components:{
    Header2,
    Footer
  }
  
}
</script>

<style scoped>
.Facilities{
  margin-top:8rem;
  font-family: "poppins";
}
.facilities-wrapper {
    margin-top: 4rem;
    width: 100%;
    height: auto;
    align-content: center;
}
.text {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bolder;
    font-size: 24px;
    line-height: 25rem;
    color: #ffffff;
    padding: 1rem;
}
.Heading{
  /* padding: 0rem 0rem 2rem 2rem */
}
.image-section {
    width: 300px;
    height: 245px;
}
.first-image {
    background-image: url(../assets/images/chelsea.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.second-image {
    background-image: url(../assets/images/jared.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.third-image {
    background-image: url(../assets/images/colorful.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.fourth-image {
    background-image: url(../assets/images/humphrey.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.fifth-image {
    background-image: url(../assets/images/q.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.sixth-image {
    background-image: url(../assets/images/robert.png);
    background-repeat: no-repeat;
    background-size: contain;
}
.img-flex2{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* flex-flow: wrap; */
    box-sizing: border-box;
    padding: 3rem 0rem 0rem 0rem
}
.img-flex {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* flex-flow: wrap; */
    box-sizing: border-box;
}
@media (max-width:320px) {
  .img-flex{
    flex-flow: wrap;
  }
  .img-flex2{
    flex-flow: wrap;
    padding: 0rem 0rem 0rem 0rem
  }
  .Facilities{
  margin-top:0rem;
  font-family: "poppins";
}
}
@media (min-width:321px) and (max-width:576px) {
   .img-flex{
    flex-flow: wrap;
    margin-left:1.5rem
  }
  .img-flex2{
    flex-flow: wrap;
    padding: 0rem 0rem 0rem 0rem
  }
  .facilities-wrapper {
    margin-top: -4rem;
    width: 100%;
    height: auto;
    align-content: center;
}
}
@media (min-width:768px) and (max-width:769px) {
   .facilities-wrapper {
    margin-top: -6rem;
    width: 100%;
    height: auto;
    align-content: center;
}
.img-flex2{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* flex-flow: wrap; */
    box-sizing: border-box;
    padding: 0rem 0rem 0rem 0rem
}
.img-flex {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* flex-flow: wrap; */
    box-sizing: border-box;
}
.image-section {
    width: 220px;
    height: 245px;
}
}
</style>