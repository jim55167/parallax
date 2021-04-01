<template>
  <div>
    <div class="content-head d-flex">
      <div class="body-left d-flex">
        <div class="left-nav">
          <h1 class="title_style">Single Speed,</h1>
          <h1 class="title_style">Single Life.</h1>
          <div class="head-left-content">
            <p class="head-nav">
              More recently the “fixie” has become a popular alternative among
              mainly urban cyclists, offering the advantage of simplicity
              compared with the standard multi-geared bicycle.
            </p>
            <input class="head_input" type="button" value="Shop Now" />
          </div>
        </div>
      </div>
      <div class="head-right position-relative">
        <img class="head-image" src="@/assets/image/p1.jpg" alt="圖一" />
        <div class="d-flex head-right-button position-absolute">
          <div class="d-flex">
            <button type="button">
              <i class="fa-2x fas fa-chevron-left input-icon"></i>
            </button>
            <button type="button">
              <i class="fa-2x fas fa-chevron-right input-icon"></i>
            </button>
          </div>
          <div class="selected-name d-flex">
            <p class="d-flex">Collection 001-xx</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    const headScroll = this.$gsap.timeline({
      scrollTrigger: {
        trigger: 'this',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
      }
    })
    headScroll
      .fromTo('.head-right',
        { x: '50%', opacity: 0 },
        { x: '0', opacity: 1, duration: 0.5, delay: 0.8 }
      )
      .fromTo('.head-title',
        { x: '-50%', opacity: 0 },
        { x: '0', opacity: 1, duration: 0.5, delay: 0.2 }
      )
      .fromTo('.head-nav',
        { x: '-50%', opacity: 0 },
        { x: '0', opacity: 1, duration: 0.5, delay: 0.2 }
      )
      .fromTo('.head_input',
        { x: '-50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, delay: 0.2 }
      )
  }
}
</script>
