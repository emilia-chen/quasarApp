<template>

    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Click or tap below, to see the innerLoading component work with a div.
        It is simulating a delay from a server reply.
      </p>
      <q-btn color="primary" @click="showTextLoading()">
        Show Text Loading
      </q-btn>

      <div class="row justify-center" style="margin-top: 40px">
        <q-card style="width: 288px; height: 262px;" color="grey-2" text-color="dark" class="relative-position">

            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
              </div>
            </transition>

          <q-inner-loading :visible="visible">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>
        </q-card>
      </div>

  <q-carousel
      color="white"
      arrows
      quick-nav
      height="300px"
    >
      <q-carousel-slide img-src="statics/quasar-logo.png" />
      <q-carousel-slide img-src="statics/quasar-logo.png" />
      <q-carousel-slide img-src="statics/quasar-logo.png" />
  </q-carousel>
    </div>

</template>

<style>
</style>

<script>
import {
  QInnerLoading, QSpinnerGears, QCard, QCarousel,
  QCarouselSlide

} from 'quasar'

export default {
  name: 'avatar',
  // we manually trigger it (this is not needed if we
  // don't skip Ajax calls hijacking)
  components: {

    QInnerLoading,
    QSpinnerGears,
    QCard,
    QCarousel,
    QCarouselSlide

  },
  data () {
    return {
      visible: false,
      showSimulatedReturnData: false
    }
  },
  methods: {
    showTextLoading () {
      this.show()
    },
    show () {
      this.visible = true
      this.showSimulatedReturnData = false
      setTimeout(() => {
        this.visible = false
        this.showSimulatedReturnData = true
      }, 3000)
    }
  }
}
</script>
