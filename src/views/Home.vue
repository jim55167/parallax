<template>
  <div class='home'>
    <Navbar/>
    <Singlebody/>
    <Onebody/>
    <Strippedbody/>
    <Regularbody/>
    <Randombody/>
  </div>
</template>

<script>
import Navbar from '@/components/navBar.vue'
import Singlebody from '@/components/singleBody.vue'
import Onebody from '@/components/oneBody.vue'
import Strippedbody from '@/components/strippedBody.vue'
import Regularbody from '@/components/regularBody.vue'
import Randombody from '@/components/randomBody.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  mounted () {
    // this.$gsap.to('.collection-img', {
    //   scrollTrigger: {
    //     trigger: 'html',
    //     start: 'top center',
    //     scrub: true
    //   },
    //   x: (i, target) => this.$scrollTrigger.maxScroll(window) * target.dataset.speed,
    //   ease: 'none'
    // })
  },
  components: {
    Navbar,
    Singlebody,
    Onebody,
    Strippedbody,
    Regularbody,
    Randombody
  }
}
</script>

<style scoped>

</style>
