<template>
    <div>
        <Header2></Header2>
        <div class="Services">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed assumenda voluptates 
                delectus ea tenetur maiores soluta amet eligendi, animi laudantium ducimus ab
                adipisci minus voluptatibus debitis ad aperiam perferendis? Ipsam.</p>
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