<template>
    <h1>{{ product.name }}</h1>
</template>

<script>
import {products} from '@/temp-data'
export default {
    name: 'ProductDetailsPage',
    data(){
        return {
            product: products.find(p => p.id === this.$route.params.productId)
        }
    }
}
</script>