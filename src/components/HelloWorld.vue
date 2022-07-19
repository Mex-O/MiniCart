<template>
  <div class="Header">
    <p>&#128722; {{carts.length}}</p>
    <div class="products">
      <h2>Products</h2>
      <div class="card" v-for="(product,index) in products" :key="index">
      <div class="card-head">
          <img :src="product.image" class="img-fluid"/>
          <h3>{{product.name}}</h3>
          <p>{{product.cost}}</p>
          <button @click="addToCart">Add to cart</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['products','carts'])
  },
  methods:{
    ...mapMutations(['addToCart'])
  }
}
</script>

<style scoped>
.card{
  display: flex;
  flex-direction:column;
  margin:20px;
  align-items:center;
  align-self:center;
  padding:20px;
}
.img-fluid{
  height:100px;
  width:100px;
}
.Header p{
  text-align:right;
  font-size:20px;
  padding:20px;
}
</style>