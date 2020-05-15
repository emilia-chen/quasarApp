<template>
<div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>

</template>

<style>
</style>

<script>
import {
  QAjaxBar
} from 'quasar'

export default {
  name: 'AjaxBar',
  // we manually trigger it (this is not needed if we
  // don't skip Ajax calls hijacking)
  components: {
    QAjaxBar
  },
  methods: {
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>
