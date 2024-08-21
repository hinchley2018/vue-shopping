
<template>
    <h1>Shopping Cart Page</h1>
    <div
        v-if="cartItems.length > 0"
    >
        <div
            class="product-card" 
            v-for="product in cartItems"
            :key="product.id"
        >
            <a href="/products/1">
                <h3>{{ product.name }}</h3>
            </a>
            <p>{{ product.price }}</p>
        </div>
    </div>
    <div v-if="cartItems.length === 0">
        <h3>Your cart is empty</h3>
    </div>
</template>

<script>
import { cartItems } from '@/temp-data';

export default {
    name: 'ShoppingCartPage',
    data(){
        return {
            cartItems
        }
    }
}
</script>