<template>
    <div id="navbar">
      <div class="d-flex navbar-box">
        <div class="row d-flex navbar-flow position-relative">
          <div class="logo">
            <p><a href="#">Fixie</a></p>
          </div>
            <ul class="navbar-list" :class="{'inverse': showMenu}">
              <li class="active"><a href="#">Product</a></li>
              <li class="active"><a href="#">Blog</a></li>
              <li class="active"><a href="#">Contact</a></li>
            </ul>
          <template>
            <span class="icon" @click="toggleMenu"><img alt="menu" src="~@/assets/image/hamburger.png"></span>
          </template>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  },
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
