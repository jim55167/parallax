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
  mounted () {
    const navBar = this.$gsap.timeline({
      scrollTrigger: {
        trigger: 'this',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
        // markers: true
      }
    })
    navBar
      .fromTo('.navbar-list',
        { y: '-100%', opacity: 0 },
        { y: '5%', opacity: 1, duration: 1 }
      )
  }
}
</script>
