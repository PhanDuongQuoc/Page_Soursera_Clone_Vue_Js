<template>
<section class="py-4">
  <div class="container-home">
    <div class="row">
      <div class="col-12">
        <div class="container-fluid bsb-hero-6 bsb-overlay border" style="--bsb-overlay-opacity: 0.0; --bsb-overlay-bg-color: var(--bs-light-rgb); background-image: url('https://www.oxfordlearning.com/wp-content/uploads/2017/11/AdobeStock_132869900.jpeg');background-size: 100%; background-repeat: no-repeat;">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-12 col-md-11 col-xl-10">
              <h2 class="display-1 text-center text-md-start text-shadow-head fw-bold mb-4">Learn without limits</h2>
              <p class="lead text-center text-md-start text-shadow-body mb-5 d-flex justify-content-sm-center justify-content-md-start">
                <span class="col-12 col-sm-10 col-md-8 col-xxl-7">Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and degrees from world-class universities and companies.</span>
              </p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-start">
                <a href="#!" class="btn bsb-btn-2xl btn-outline">Join For Free</a>
                <a href="#!" class="btn bsb-btn-2xl btn-outline-btn">Try Coursera for Business</a>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default{
    name:'AppBanner_1',
    components:{
        
    },
    props:{
      banners:{
        type: Object,
        required: true
      }
    }
}
</script>
<style scoped>

.btn-outline{
  background-color: #0056d2;
  color: white;
}
.btn-outline-btn{
  border: 2px solid #0056d2;
  color: #0056d2;
}


.btn-outline:hover{
  opacity: 0.7;
}
.btn-outline-btn:hover{
  opacity: 0.7;
}
</style>