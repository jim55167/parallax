<template>
  <div>
    <div class="str-body d-flex">
      <form action="#">
        <div class="read-more d-flex">
          <input type="button" value="Read More">
          <button type="submit" class="d-flex">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
      <section class="str-left d-flex">
        <div class="left-nav" id="strip-gsap">
          <h1 class="left-nav-gsap">Stripped-Down</h1>
          <h2 class="left-nav-gsap2">Performance</h2>
        </div>
        <div class="str-left-content">
          <p>
            Without the added parts required for a fully geared drive
            train—derailleurs, shifters, cables, cable carriers, multiple chain
            rings, freewheel hub, brazed-on mounting lugs—a fixed gear bicycle
            weighs less than its geared equivalent.
          </p>
        </div>
      </section>
      <div class="str-right">
        <div class="str-image" ></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$gsap.to('.left-nav-gsap', {
      left: '30rem',
      ease: 'none',
      scrollTrigger: {
        trigger: '.onebody-title',
        scrub: true
      }
    })
    this.$gsap.to('.left-nav-gsap2', {
      scrollTrigger: {
        trigger: '#strip-gsap',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'restart none none none'
      },
      x: 20,
      duration: 1
    })
    this.$gsap.to('.str-image', {
      backgroundPosition: '100px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.str-right',
        scrub: true
      }
    })
  }
}
</script>
