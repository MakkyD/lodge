<template>
<Header2></Header2>
    <div class="contact">
        <div class="row container contact-us-body">
			<div class="col-sm-6 contact-us-box1">
                
				<h1 class="contact-us-large-text">
					We'd love to hear from you
				</h1>
                <div class="contact-us-contact-support">
                     <div class="contact-us-contact">
                        <div class="flex">
                            <div class="contact-us-address">
                                <h3>Our address</h3>
                                <p>No. 3 portharcout road,</p>
                                <p>umutoguma, rivers state</p>
                            </div>
                            <div class=" contact-us-support">
                                <h3>Support</h3>
                                <p>hello@tiptonhotels.com</p>
                                <p>+234 567 88790</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			<div class="col-sm-6 contact-us-box2">
				<h2>Send us a message</h2>
				<div class="contact-us-input">
					<input type="text" name="name" placeholder="Name">
				</div>
				<div class="contact-us-input">
					<input type="text" name="email" placeholder="Email">
				</div>
				<div class="contact-us-input">
					<textarea class="contact-us-textarea" placeholder="Your message"></textarea>
				</div>
				<div class="contact-us-submit">
					<button class="btn btn-dark submit">Submit</button>
				</div>
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
*{
    margin: 0rem;
}
.container{
     max-width: 100%;
 }
.contact{
    font-family: "poppins";
}
.contact-us-box2 {
    width: 100%;
    /* margin: 1rem; */
    border-radius: 3px;
    padding: 1.5em;
    -webkit-box-shadow: 1px 1px 8px 0px #ccc;
    -moz-box-shadow: 1px 1px 8px 0px #ccc;
    box-shadow: 1px 1px 8px 0px #ccc;
}
.contact-us-box1 {
    width: 100%;
    /* margin: 1rem; */
}
.flex{
    display: flex;
}
.contact-us-address {
    margin-right: 2em;
}
.contact-us-body{
    margin-top:8rem
}
.submit{
    width:100%
}
.contact-us-input input, .contact-us-textarea {
    border: 1px solid silver;
    border-radius: 3px;
    padding: .8em .8em .8em 1em;
    margin-top: 1.5em;
    width: 100%;
}
   .contact-us-large-text{
    margin: 0rem 0rem 2rem 0rem;
}
.contact-us-textarea {
    height: 10em;
}
.contact-us-contact-support{
    line-height: 2rem;
}
@media (max-width:320px) {
   .flex{
       display: inline;
   }
   .contact-us-body{
    margin-top:3rem
}
.contact-us-box1 {
    width: 100%;
    margin-bottom:3rem
}
.contact-us-box2 {
    width: 100%;
    /* margin: 1rem; */
    border-radius: 3px;
    padding: 1.5em;
    -webkit-box-shadow: 1px 1px 8px 0px #ccc;
    -moz-box-shadow: 1px 1px 8px 0px #ccc;
    box-shadow: 1px 1px 8px 0px #ccc;
}
.contact-us-large-text{
    margin: 0rem 0rem 5rem 0rem;
}
}
@media (min-width:321px) and (max-width: 576px) {
    .contact-us-large-text{
    margin: 0rem 0rem 5rem 0rem;
    font-size: 2.5rem;
}
.contact-us-box2 {
    width: 100%;
    margin: 1rem;
    border-radius: 3px;
    padding: 1.5em;
    -webkit-box-shadow: 1px 1px 8px 0px #ccc;
    -moz-box-shadow: 1px 1px 8px 0px #ccc;
    box-shadow: 1px 1px 8px 0px #ccc;
}
.flex{
       display: inline;
   }
.contact-us-body{
    margin-top:3rem
}
}
@media (min-width:768px) and (max-width:769px) {
    *{
        margin: 0rem;
    }
    .contact-us-textarea {
    height: 7em;
}
 .container{
     max-width: 1000rem;
 }
 .contact-us-body{
    margin-top:3rem
}
   .contact-us-large-text{
    margin: 0rem 0rem 2rem 0rem;
    /* font-size: 2.5rem; */
}
}
</style>