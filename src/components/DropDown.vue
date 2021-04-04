<template>

  <div>
      <div class="container" @click="changeIcon(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <div class="topnav">
            <div id="links">
                <a>News</a>
                <a>Contact</a>
                <a>About</a>
            </div>
      </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
     changeIcon(x) {
        this.$el.querySelector('.container').classList.toggle("change")
        let links = document.getElementById("links")
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }
  },
}
</script>

<style  scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.1s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.topnav {
  overflow: hidden;
  background-color: red;
  position: relative;
}

.topnav #links {
  display: none;
}
</style>



