<template>
  <div>
    <Index />
  </div>
</template>

<script>
import Index from '~/components/index'
export default {
  components: {
    Index,
  },
  middleware: ['auth'],
}
</script>

<style></style>
