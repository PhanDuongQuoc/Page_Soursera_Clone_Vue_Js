<template>
<div class="container">
        <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">{{ title.t1 }}</h2>
                <h2 class="mb-4 display-5 text-center">{{title.t2  }}</h2>
                <p class="fs-5 text-secondary mb-5 text-center">{{title.t3  }}</p>
                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'AppTitle',
    props:{
          title: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
</style>