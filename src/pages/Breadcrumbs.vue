<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" />
    </q-breadcrumbs>

    <q-breadcrumbs class="text-grey">
      <q-breadcrumbs-el icon="home" />
      <q-breadcrumbs-el icon="widgets" />
      <q-breadcrumbs-el icon="navigation" />
    </q-breadcrumbs>
  </div>

</template>

<style>
</style>

<script>
import {
  QBreadcrumbs,
  QBreadcrumbsEl
} from 'quasar'

export default {
  name: 'breadcrumbs',
  // we manually trigger it (this is not needed if we
  // don't skip Ajax calls hijacking)
  components: {
    QBreadcrumbs,
    QBreadcrumbsEl
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
