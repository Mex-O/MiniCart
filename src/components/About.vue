<template>
  <div class="Header" >
    <div class="carts">
      <h2>Carts</h2>
      <div class="card" v-for="(product,index) in carts" :key="index">
          <img :src="product.productImage" class="img-fluid"/>
          <h3>{{product.productName}}</h3>
          <p>{{product.productCost}}</p>
          <button @click="removeFromCart">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {

  computed:{
    ...mapState(['carts','products'])
  },
  methods:{
    ...mapMutations(['removeFromCart'])
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