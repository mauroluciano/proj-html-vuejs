<script>
import { ref } from "vue";
</script>

<template>
  <header>
    <div class="navi justify-content-between p-5">
      <div class="logo">
        <img src="/src/assets/img/images/medical_logo_1x_light.png" alt="" />
      </div>

      <div class="menu">
        <ul class="navi align-items-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Departments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Articles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link background" href="#">Make Appointment</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="message mt-5">
        <section>
          <h2>Caring For Life</h2>
          <p>
            Kind words can be short and easy to speak, but their echoes are
            truly endless. Avada Health focuses on you as if it was our own
            family.
          </p>
          <button type="button" class="background">Learn More</button>
        </section>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
