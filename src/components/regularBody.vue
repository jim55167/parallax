<template>
  <div>
    <div class="collection d-flex">
      <div class="collection-nav">
        <h1 class="collection_title">A collection built for regular commuters</h1>
        <p class="collection_p">Riders unknown to each other commonly greet each other when on bikes. As in many subcultures, this feeling of belonging is a key factor in recruiting and retaining participants.</p>
      </div>
    </div>
    <div class="collection-box">
      <div alt="圖四" class="collection-img"></div>
      <div class="collection-text position-absolute">
        <div>
          <h1>“I like to ride. Fixed gear. No brakes. Can’t stop. Don’t want to, either.”</h1>
        </div>
        <div><i>Premium Rush (2021)</i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const timeTitle = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.collection-nav',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none none'
      }
    })
    timeTitle
      .fromTo('.collection_title',
        { y: '80%', opacity: 0 },
        { y: '-30%', opacity: 1, duration: 1 }
      )
      .fromTo('.collection_p',
        { y: '100%', opacity: 0 },
        { y: '-10%', opacity: 1, duration: 1, delay: 0.2 }
      )
  }
}
</script>
