
<template>
    <h1>Products</h1>
    <div class="products-grid">
        <div
            class="product-card" 
            v-for="product in products"
            :key="product.id"
        >
            <a href="/products/1">
                <h3>{{ product.name }}</h3>
            </a>
            <p>{{ product.price }}</p>
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
import {products} from '../temp-data'
export default {
    name: 'ProductsPage',
    data(){
        return {
            products
        }
    },
    props: {

    }
}
</script>

<style lang="css">
.products-grid {
    display: flex;
    flex-wrap: wrap;
}
.product-card {
    margin: 4px;
    border: 1px solid black;
    padding: 4px;
    width: 250px;
}
</style>