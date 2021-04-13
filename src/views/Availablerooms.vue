<template>
    <div >
        <Header2></Header2>
        <div class="Availalble-rooms">
            
        <div class="container Av1">
            <div class="card" style="width: 50rem;">
                <img class="card-img-top" src="@/assets/images/hotelRoom5.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Presidential Suite</h5>
                    <small class="card-link text-muted">Status:</small>
                    <small class="card-link text-success">Available</small>
                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                        in accusamus voluptatibus! Laborum ipsa inventore cupiditate.
                        officia expedita optio consequuntur provident enim eius culpa
                        magnam consectetur! Soluta, quod vitae dignissimos,</p>
                <h2 class="price">200,000</h2>
                <button type="button" class="btn btn-dark bookRoom" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Room</button>
            </div>
        </div>
         <div class="container Av1">
            <div class="card" style="width: 50rem;">
                <img class="card-img-top" src="@/assets/images/hotelRoom5.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Presidential Suite</h5>
                    <small class="card-link text-muted">Status:</small>
                    <small class="card-link text-success">Not Available</small>
                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                        in accusamus voluptatibus! Laborum ipsa inventore cupiditate.
                        officia expedita optio consequuntur provident enim eius culpa
                        magnam consectetur! Soluta, quod vitae dignissimos,</p>
                <h2 class="price">200,000</h2>
                <button type="button" class="btn btn-dark bookRoom" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Room</button>
            </div>
        </div>
        <div class="container Av1">
            <div class="card" style="width: 50rem;">
                <img class="card-img-top" src="@/assets/images/hotelRoom5.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Executive Suite</h5>
                    <small class="card-link text-muted">Status:</small>
                    <small class="card-link text-success">Available</small>
                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                        in accusamus voluptatibus! Laborum ipsa inventore cupiditate.
                        officia expedita optio consequuntur provident enim eius culpa
                        magnam consectetur! Soluta, quod vitae dignissimos,</p>
                <h2 class="price">200,000</h2>
                <button type="button" class="btn btn-dark bookRoom" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Room</button>

            </div>
        </div>
        <div class="container Av1">
            <div class="card" style="width: 50rem;">
                <img class="card-img-top" src="@/assets/images/hotelRoom5.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Standard Suite</h5>
                    <small class="card-link text-muted">Status:</small>
                    <small class="card-link text-success">Available</small>
                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                        in accusamus voluptatibus! Laborum ipsa inventore cupiditate.
                        officia expedita optio consequuntur provident enim eius culpa
                        magnam consectetur! Soluta, quod vitae dignissimos,</p>
                <h2 class="price">200,000</h2>
                <button type="button" class="btn btn-dark bookRoom" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Room</button>

            </div>
        </div>
         <div class="container Av1">
            <div class="card" style="width: 50rem;">
                <img class="card-img-top" src="@/assets/images/hotelRoom5.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Presidential Suite</h5>
                    <small class="card-link text-muted">Status:</small>
                    <small class="card-link text-success">Not Available</small>
                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                        in accusamus voluptatibus! Laborum ipsa inventore cupiditate.
                        officia expedita optio consequuntur provident enim eius culpa
                        magnam consectetur! Soluta, quod vitae dignissimos,</p>
                <h2 class="price">200,000</h2>
                <button type="button" class="btn btn-dark bookRoom" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Room</button>
            </div>
        </div>
    <session class="bookingModal">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Book A Room</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3 Name">
                        <div>
                            <label for="recipient-name" class="col-form-label">First Name:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div>
                            <label for="recipient-name" class="col-form-label">Last Name:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                    </div>
                    <div class="mb-3 Contact">
                        <div>
                            <label for="recipient-name" class="col-form-label">Phone Number:</label>
                            <input type="number" class="form-control" id="recipient-name">
                        </div>
                        <div>
                            <label for="recipient-name" class="col-form-label">Email:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                    </div>
                    <div class="mb-3 Contact">
                        <div>
                            <label for="recipient-name" class="col-form-label">Number of Nights:</label>
                            <input type="number" class="form-control" id="recipient-name">
                        </div>
                        <div>
                            <label for="recipient-name" class="col-form-label">No of Persons:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
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
    </div>
</template>


<script>
import Header2 from '@/components/Header2.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Availablerooms',
    components:{
        Header2,
        Footer,
    }
}
</script>
<style scoped>
.Availalble-rooms{
    margin-top: 10rem;
    font-family: "poppins";
}
.Av1{
    display:flex;
    /* justify-content:space-between; */
    margin-top:2rem;
}
/* .card-img-top{
width:100%
} */
.bookRoom{
    width:50%;
    background-color: orangered;
    border:none;
    margin-top: 5rem;
    padding:0.5rem 0.5rem 0.5rem 0.5rem
}
.Name{
    display: flex;
    justify-content: space-around;
}
.price{
   box-shadow: grey 0px 1px 8px;
    width:30%;
    text-align: center;
    padding: 0.5rem
}
.Contact{
    display: flex;
    justify-content: space-around;
}
.text{
    text-align:justify;
    overflow-wrap: break-word;
    margin-left:5rem;
    font-size: 1.5rem
}
@media (max-width:320px) {
    .Av1{
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin:2rem 0rem 0rem 0rem;
}
.Availalble-rooms{
    margin-top:5rem;
    font-family: "poppins";
}
.text{
    margin-top:2rem;
    font-size:1rem;
    margin-left: 0rem;
}
.price{
    width:50%;
}
.bookRoom{
    margin-top:2rem;
    width:100%;
    padding:0.5rem 0.5rem 0.5rem 0.5rem
}
}
@media (min-width:321px) and (max-width:576px) {
       .Av1{
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin:2rem 0rem 0rem 0rem;
}
.bookRoom{
    margin-top:2rem;
    width:100%;
    padding:0.5rem 0.5rem 0.5rem 0.5rem
}
.Availalble-rooms{
    margin-top:5rem;
    font-family: "poppins";
}
.text{
    text-align:justify;
    margin:2rem 1.6rem 0rem 1.6rem;
    font-size:1.2rem
}
.price{
    width:50%;
}
}
@media (min-width:768px) and (max-width:769px) {
.Av1{
    margin:-5rem 0rem 8rem 0rem
}
.card{
    height: 50vh ;
}
.text{
    text-align:justify;
    margin:2rem 1.6rem 0rem 1.6rem;
    font-size:1rem
}
.bookRoom{
    margin-top:2rem;
    width:100%;
    padding:0.5rem 0.5rem 0.5rem 0.5rem
}
}
</style>