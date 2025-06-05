<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm fixed-top px-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">COURSERA STUDY THU DUC</a>
      <a href="" class="text-decoration-none button_bt">Khám phá</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <form class="d-flex mx-auto my-2 my-lg-0" role="search">
          <input style="width: 350px;" 
            class="form-control me-2 search-input"
            type="search"
            placeholder="Bạn muốn học gì?"
            aria-label="Search"
          />
          <button class="search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center text-center text-lg-start">
          <li class="nav-item mx-1">
            <a class="nav-link" href="/">Trang chủ</a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">Bằng cấp trực tuyến</a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">Nghề nghiệp</a>
          </li>


     
          <li class="nav-item mx-1">
            <a href="/Dangnhap" class="text-decoration-none button">Đăng nhập</a>
          </li>
          <li class="nav-item mx-1">
            <a href="/DangKy" class="text-decoration-none button">Đăng ký</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
export default{
    name:'AppHeader',
    components:{
    },
    data(){
      return{
      }
    }
}
</script>

<style scoped>
.navbar{
    z-index: 999;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
}
.button_bt{
  border:1px solid #0056d2;
  color: #0056d2;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
}
.nav-link.active {
      font-weight: bold;
      border-bottom: 2px solid #0056d2;
    }
    .navbar-brand {
      font-weight: 700;
      font-size: 1.5rem;
      color: #0056d2;
    }
    .search-input {
      border-radius: 50px;
      padding: 6px 20px;
      border: 1px solid #ccc;
      width: 100%;
      max-width: 400px;
    }
    .search-btn {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      background-color: #0056d2;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button{
        background-color: #0056d2;
        border: 1px solid #0056d2;
        border-radius: 15px;
        padding: 10px;
        color: white;
    }

    .button:hover{
        background-color: white;
        color: #0056d2;        
    }
   
    .nav-link:hover{
        color: #0056d2;
    }
    
</style>