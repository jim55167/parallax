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
      <div class='onebody-left'>
        <div class="onebody-image"></div>
      </div>
      <div class='onebody-right'>
        <div class='onebody-nav'>
          <p>A fixed gear drivetrain is more mechanically efficient than any other bicycle drivetrain, with the most direct power transfer from rider to the wheels. Thus, it requires less energy in any given gear to move than a geared bike in the same gear.</p>
        </div>
        <div class='onebody-title'>
          <h1 class="onebody-title-gsap">One Gear,</h1>
          <h2 class="onebody-title2-gsap">Many Variations</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$gsap.to('.onebody-image', {
      backgroundPosition: '-100px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.onebody-left',
        scrub: true
      }
    })
    this.$gsap.to('.onebody-title-gsap', {
      left: '30rem',
      ease: 'none',
      scrollTrigger: {
        trigger: '.onebody-title',
        scrub: true
      }
    })
    this.$gsap.to('.onebody-title2-gsap', {
      right: '-1rem',
      ease: 'none',
      scrollTrigger: {
        trigger: '.onebody-title',
        scrub: true
      }
    })
  }
}
</script>
