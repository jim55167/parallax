<template>
  <div>
    <div class="content-head d-flex">
      <div class="body-left d-flex">
        <div class="left-nav">
          <h1 class="head-title animated-text">Single Speed, Single Life.</h1>
          <div class="head-left-content">
            <p class="head-nav animated-text">
              More recently the “fixie” has become a popular alternative among
              mainly urban cyclists, offering the advantage of simplicity
              compared with the standard multi-geared bicycle.
            </p>
            <input class="animated-text" type="button" value="Shop Now" />
          </div>
        </div>
      </div>
      <div class="head-right animated">
        <img class="head-image" src="@/assets/image/p1.jpg" alt="圖一" />
        <div class="d-flex head-right-button">
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
import $ from 'jquery'
export default {
  mounted () {
    // this.$gsap.to('.head-right', {
    //   scrollTrigger: {
    //     trigger: 'html',
    //     start: 'top top',
    //     end: '150px 100px',
    //     onEnter: () => console.log('enter'),
    //     onLeave: () => console.log('leave'),
    //     onEnterBack: () => console.log('enter back'),
    //     onLeaveBack: () => console.log('all the way back'),
    //     markers: true,
    //     toggleActions: 'restart none none none'
    //   },
    //   x: -50,
    //   duration: 1
    // })
    $(document).ready(function () {
      $(window).scroll(function () {
        const scrollPos = $(window).scrollTop()
        const windowHeight = $(window).height()

        $('.animated').each(function () {
          const thisPos = $(this).offset().top
          if ((windowHeight + scrollPos) >= thisPos) {
            $(this).addClass('fadeIn')
          }
        })
        $('.animated-text').each(function () {
          const thisPos = $(this).offset().top
          if ((windowHeight + scrollPos) >= thisPos) {
            $(this).addClass('fadeIn')
          }
        })
      })
    })
  }
}
</script>
