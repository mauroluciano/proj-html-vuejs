<script>
import { ref } from "vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="welcome py-5">
        <div class="row text-center mt-5 mb-2">
          <h2>Welcome to Avada Health</h2>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
        </div>

        <div class="row row-cols-1 text-center boxMessage">
          <div class="col-sm-12 col-md-6 col-lg-3 my-2">
            <section>
              <div class="my-2">
                <img src="/src/assets/img/images/icon-1.png" alt="" />
              </div>
              <span>Same Day Appointments</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </section>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2">
            <section>
              <div class="my-2">
                <img src="/src/assets/img/images/icon-2.png" alt="" />
              </div>
              <span>Same Day Appointments</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </section>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2">
            <section>
              <div class="my-2">
                <img src="/src/assets/img/images/icon-3.png" alt="" />
              </div>
              <span>Same Day Appointments</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </section>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2">
            <section>
              <div class="my-2">
                <img src="/src/assets/img/images/icon-4.png" alt="" />
              </div>
              <span>Same Day Appointments</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div class="docSection">
      <div class="container">
        <div class="ourDoctors text-center py-5">
          <div class="row p-5">
            <div class="my-2">
              <img
                src="/src/assets/img/images/icon-5.png"
                class="icon"
                alt="" />
            </div>

            <h2>Meet Our Doctors</h2>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>

            <div class="d-flex justify-content-between flex-wrap">
              <div class="row row-cols-1 col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card">
                  <img
                    src="/src/assets/img/images/doctor-1-200x206.jpg"
                    class="card-img-top"
                    alt="..." />
                  <div class="card-body text-start">
                    <h5 v-for="name in names" class="card-title">{{ name }}</h5>
                    <sub>Anesthesiologist</sub>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row row-cols-1 col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card">
                  <img
                    src="/src/assets/img/images/doctor-2-200x206.jpg"
                    class="card-img-top"
                    alt="..." />
                  <div class="card-body text-start">
                    <h5 v-for="name in names" class="card-title">{{ name }}</h5>
                    <sub>Cardiologist</sub>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row row-cols-1 col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="card">
                  <img
                    src="/src/assets/img/images/doctor-3-200x206.jpg"
                    class="card-img-top"
                    alt="..." />
                  <div class="card-body text-start">
                    <h5 v-for="name in names" class="card-title">{{ name }}</h5>
                    <sub>Nurse Practitioner</sub>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center py-5">
        <div class="row p-5">
          <div class="my-2">
            <img src="/src/assets/img/images/icon-6.png" class="icon" alt="" />
          </div>

          <h2>Our Healt Services</h2>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
          <div class="d-flex justify-content-between flex-wrap">
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-14.png" alt="" />
                </div>
                <span>Rehabilitation Center</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-15.png" alt="" />
                </div>
                <span>Dental Implants</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-16.png" alt="" />
                </div>
                <span>Medicine Research</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-11.png" alt="" />
                </div>
                <span>Blood Bank</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-12.png" alt="" />
                </div>
                <span>Pharmaceutical Advice</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-2">
              <section>
                <div class="my-2">
                  <img src="/src/assets/img/images/icon-13.png" alt="" />
                </div>
                <span>Medical Counseling</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotronTour container-fluid flex-wrap">
      <div class="container">
        <div class="text-center py-5">
          <div class="row p-5 justify-content-center my-4">
            <div class="my-2">
              <img
                src="/src/assets/img/images/icon-7.png"
                class="icon"
                alt="" />
            </div>

            <h2>Tour Our Facilities</h2>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>

            <div>
              <img
                src="/src/assets/img/images/play-icon.png"
                class="icon"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="threeBoxes flex-wrap">
      <div class="row text-center">
        <div class="col-sm emergency">
          <section>
            <span>Emergency Care</span>
            <div class="my-2">
              <img src="/src/assets/img/images/wave-divider.png" alt="" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
            </p>
          </section>
        </div>
        <div class="col-sm expert">
          <section>
            <span>Expert Diagnostics</span>
            <div class="my-2">
              <img src="/src/assets/img/images/wave-divider.png" alt="" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
            </p>
          </section>
        </div>
        <div class="col-sm superb">
          <section>
            <span>Superb Rehabilitation</span>
            <div class="my-2">
              <img src="/src/assets/img/images/wave-divider.png" alt="" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
            </p>
          </section>
        </div>
      </div>
    </div>

    <div class="jumbotronApp container-fluid flex-wrap">
      <div class="container">
        <div class="text-center py-5">
          <div class="row p-5 justify-content-center my-4">
            <div class="my-2">
              <img
                src="/src/assets/img/images/icon-7.png"
                class="icon"
                alt="" />
            </div>

            <h2>Make An Appointment</h2>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>
            <div class="d-flex justify-content-center">
              <form
                action="http://learning.tizianonicolai.com/request-catcher/"
                method="GET"
                class="text-start row form g-3 needs-validation">
                <div class="col-sm-12 col-md-6 col-lg-6 my-2">
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Name*"
                    required />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 my-2">
                  <input
                    name="email"
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="E-mail*"
                    required />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 my-2">
                  <input
                    name="tel"
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Phone number"
                    required />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 my-2">
                  <input
                    name="appointment"
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="Appointment"
                    required />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-12 my-2">
                  <textarea
                    class="form-control"
                    name="textarea"
                    id="textarea"
                    placeholder="How can we help?"
                    rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" value="Send">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotronIcons container-fluid">
      <div class="container">
        <div class="row text-center d-flex justify-content-center flex-wrap">
          <div class="col-sm">
            <img
              src="/src/assets/img/images/client-logos-1-200x188.png"
              alt="" />
          </div>

          <div class="col-sm">
            <img
              src="/src/assets/img/images/client-logos-2-200x188.png"
              alt="" />
          </div>
          <div class="col-sm">
            <img
              src="/src/assets/img/images/client-logos-3-200x188.png"
              alt="" />
          </div>
          <div class="col-sm">
            <img
              src="/src/assets/img/images/client-logos-4-200x188.png"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
