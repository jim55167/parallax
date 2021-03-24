<template>
    <div id="navbar">
      <div class="d-flex navbar-box">
        <div class="row d-flex navbar-between">
          <div class="logo">
            <p><a href="#">Fixie</a></p>
          </div>
            <ul class="d-flex navbar-list">
              <li><a href="#">Product</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  mounted () {
    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.navbar',
        scrub: 1,
        start: 'top'
      }
    })
    tl.to('.navbar-list', {
      y: -50,
      ease: 'since.inOut',
      duration: 2
    })
  }
}
</script>
