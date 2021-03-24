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
      <div class="str-left d-flex">
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
      </div>
      <div class="str-right">
        <img class="str-image" src="@/assets/image/p3.jpg" alt="圖三"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$gsap.to('.left-nav-gsap', {
      scrollTrigger: {
        trigger: '#strip-gsap',
        start: 'top bottom',
        end: 'center center',
        toggleActions: 'restart none none none'
      },
      x: -20,
      duration: 1
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
      scrollTrigger: {
        trigger: '.str-right',
        start: 'top bottom',
        end: 'center center',
        onEnter: () => console.log('enter'),
        onLeave: () => console.log('leave'),
        onEnterBack: () => console.log('enter back'),
        onLeaveBack: () => console.log('all the way back'),
        markers: true,
        toggleActions: 'restart none none none'
      },
      x: -50,
      duration: 1
    })
  }
}
</script>
