<template>
    <div class="about">
        <Header2></Header2>
        <div class="container flex">
            <div class="img-flex1">
                <img src="@/assets/images/colorful.png" class="img" alt="">
            </div>
            <div class="img-flex2">
                <img src="@/assets/images/jared.png" alt="" class="img">
            </div>
            <div class="img-flex3">
                <img src="@/assets/images/q.png" class="img" alt="">
            </div>
        </div>
        <div class="container text">
            <h1 class="about-heading">OUR COMPANY</h1> 
            <div class="about-text">
                <p>CHMWarnick (CHMW) is the leading provider of hotel asset management and owner advisory services in the US.
                So, what does that really mean?
                Hotel real estate is our sole focus.  Protecting hotel owner interests and paving a pathway for achieving investment objectives is our mission.
                Simply, we are a highly-seasoned team of hotel real estate experts, dedicated to guiding the efforts and protecting the interests of hotel owners and investors throughout every stage of the investment cycle – from acquisition to disposition. Drawing on our deep and diversified experience, CHMW provides services that enable hotel owners to successfully navigate issues, make informed decisions, and execute on strategies proven to yield superior investment returns.
                We are not consultants. CHMW cultivates long-term relationships with clients, and becomes an extension of the team, organization or company we represent. We work at a level of dedication, diligence and passion you would expect from one of your own.
            </p>
            </div>
            <div class="fact-text">
                <ul>
                <h1 class="fact-heading">Fast Facts</h1> 
                <li>Leading hotel asset management and owner advisory services firm</li>
                <li>More than 70 hotels, 29,000 guestrooms, $15 billion in client investments under asset management</li>
                <li>Advising clients on more than $2 billion in hotel development projects</li>
                <li>25-year company track record</li>
                <li>40 hospitality professionals</li>
                <li>Ten offices located across the US</li>
                <li>30-year average industry experience across one-third of our team members</li>
                <li>Service major and secondary markets in the US, and in the Caribbean</li>
                <li>Global client base in China, Japan, Korea, Spain, UAE and the U.S</li>
                <li>Diversified client types: sovereign wealth funds, international investment companies, Fortune 100, private equity, public/municipal agencies, lending institutions</li>
                <li>Specialize in full-service hotels and resorts, and select-service portfolios</li>
                <li>Largest asset manager of publicly-owned convention center headquarter hotels</li>
                <li>No competing lines of business, such as management companies or investment platforms – 100% focused on representing client hotel investments</li>
            </ul>
            </div>
            
        </div>
        <Footer></Footer>
    </div>
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
.about{
    font-family: "poppins";
}
.flex{
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content: space-around;
    margin-top:12rem;
}
.img-flex2{
    margin-top: -2rem;
}

/* .img-flex.img{
    width:150%
} */
.text{
    /* text-align: center; */
    margin: 3rem 5rem 0rem 3rem;
    font-family:"poppins"
}
.about-heading{
    text-align: center;
}
.fact-heading{
    text-align: center;
}
@media (max-width:320px) {
    .img-flex2{
    margin-top: 0rem;
}
.about-text{
    text-align: justify;
}
.text{
    text-align: center;
    margin: 3rem 5rem 0rem 0rem;
    font-family:"poppins";
    font-size:12px;
}
.img{
    width:90%;
}
.flex{
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content: space-around;
    margin:5rem 0rem 0rem 0rem;
    padding:0rem 0rem 0rem 0.6rem
}
.about-heading{
    text-align: center;
    font-size:35px;
    font-weight:600
}
/* .fact-text{
    text-align: justify;
} */
ul{
    padding:0rem 0rem 0rem 1rem;
    text-align: left;
}
}
@media (min-width:321px) and (max-width:576px){
.img-flex2{
    margin-top: 0rem;
}
.img{
    width:90%;
}
.text{
    /* text-align: center; */
    margin: 3rem 5rem 0rem 0rem;
    font-family:"poppins";
    font-size:12px;
}
.about-text{
    text-align: justify;
}
ul{
    padding:0rem 0rem 0rem 1.5rem
}
.flex{
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content: space-around;
    margin:5rem 0rem 0rem 0rem;
    padding:0rem 0rem 0rem 0.8rem
}
.about-heading{
    text-align: center;
    font-size:35px;
    font-weight:600
}
.fact-heading{
    text-align: center;
    font-size:35px;
    font-weight:600
}
}
@media (min-width:768px) and (max-width:769px) {
    .img{
    width:90%;
}
.flex{
    display:flex;
    width:100%;
    flex-direction:row;
    /* justify-content: space-around; */
    margin:5rem 0rem 0rem 0rem;
    padding:0rem 0rem 0rem 4.5rem
}
.text{
    text-align: justify;
    margin: 3rem 5rem 0rem 1.6rem;
    font-family:"poppins";
    font-size:12px;
}
.fact-text{
    margin:0rem 0rem 0rem 0rem
}
}
</style>