<template>
  <div>
    <div class='onebody d-flex'>
      <form action='#'>
        <div class='read-more d-flex'>
          <input type='button' value='Read More'>
          <button type='submit' class='d-flex'>
            <i class='fas fa-arrow-right'></i>
          </button>
        </div>
      </form>
      <div class='onebody-left' id='onebody-left-gsap'>
        <div class="onebody-image"></div>
      </div>
      <div class='onebody-right'>
        <div class='onebody-nav'>
          <p>A fixed gear drivetrain is more mechanically efficient than any other bicycle drivetrain, with the most direct power transfer from rider to the wheels. Thus, it requires less energy in any given gear to move than a geared bike in the same gear.</p>
        </div>
        <div class='onebody-title'>
          <h1 id="onebody-title-gsap">One Gear,</h1>
          <h2 id="onebody-title2-gsap">Many Variations</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$gsap.to('.onebody-image', {
      scrollTrigger: {
        trigger: '.onebody-left',
        start: 'top bottom',
        end: 'center center',
        toggleActions: 'restart none none none'
      },
      x: 50,
      duration: 2
    })
    this.$gsap.to('#onebody-title-gsap', {
      scrollTrigger: {
        trigger: '.onebody-title',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'restart none none none'
      },
      x: -20,
      duration: 1
    })
    this.$gsap.to('#onebody-title2-gsap', {
      scrollTrigger: {
        trigger: '.onebody-title',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'restart none none none'
      },
      x: 50,
      duration: 1
    })
  }
}
</script>
