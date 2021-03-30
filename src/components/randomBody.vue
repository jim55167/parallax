<template>
  <div>
    <div class="footer-body">
      <div class="footer-box">
        <ul>
          <li>
            <section class="random1">
              <img class="footer-box-img" src="@/assets/image/p5.jpg" alt="圖五"/>
              <h1 class="footer-title">All who cycle are my friends</h1>
              <p class="footer-date footer-nav">2020.4.27</p>
              <nav class="footer-nav">
                A rider from Stockholm interviewed for an article about the
                phenomenon notes that riding a bike imparts a feeling of freedom
                to the rider…
              </nav>
            </section>
          </li>
          <li>
            <section class="random2">
              <img class="footer-box-img" src="@/assets/image/p6.jpg" alt="圖六"/>
              <h1 class="footer-title">Swedish riders and enthusiasts</h1>
              <p class="footer-date footer-nav">2020.3.11</p>
              <nav class="footer-nav">
                There are also several bicycle clubs throughout Sweden with a
                fixed-gear niche. Komet Club Rouler is a club based in Gothenburg,
                annually arranging Svart Kat…
              </nav>
            </section>
          </li>
          <li>
            <section class="random3">
              <img class="footer-box-img" src="@/assets/image/p7.jpg" alt="圖七"/>
              <h1 class="footer-title">The Australian fixie culture</h1>
              <p class="footer-date footer-nav">2020.2.29</p>
              <nav class="footer-nav">
                Online stores in Australia ship partially-assembled bikes directly
                to consumers, considerably undercutting prices at typical brick
                and mortar stores…
              </nav>
            </section>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-color">
        <div class="footer-bottom-box">
          <div class="footer-bottom-nav">
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <p>&copy;2020 Fixie. All Rights Reserved.</p>
            <tfoot>Fixie</tfoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const randomList = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.footer-body',
        start: 'top bottom',
        end: 'center center',
        toggleActions: 'play none none none'
        // markers: true
      }
    })
    randomList
      .fromTo('.random1',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, delay: 0.2 }
      )
      .fromTo('.random2',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, delay: 0.2 }
      )
      .fromTo('.random3',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, delay: 0.4 }
      )
  }
}
</script>
