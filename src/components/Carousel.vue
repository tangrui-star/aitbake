<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="carousel-item"
        @click="handleItemClick(item)"
      >
        <div class="carousel-image" :style="{ backgroundImage: `url(${item.image})` }"></div>
        <div class="carousel-content">
          <h3 class="carousel-title">{{ item.title }}</h3>
          <p class="carousel-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- 指示器 -->
    <div class="carousel-indicators">
      <button 
        v-for="(item, index) in items" 
        :key="index"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></button>
    </div>
    
    <!-- 左右箭头 -->
    <button class="carousel-arrow carousel-prev" @click="prevSlide">
      <span>‹</span>
    </button>
    <button class="carousel-arrow carousel-next" @click="nextSlide">
      <span>›</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoplayTimer: null
    }
  },
  mounted() {
    if (this.autoplay) {
      this.startAutoplay()
    }
  },
  beforeUnmount() {
    this.stopAutoplay()
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
    },
    prevSlide() {
      this.currentIndex = this.currentIndex === 0 
        ? this.items.length - 1 
        : this.currentIndex - 1
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startAutoplay() {
      this.autoplayTimer = setInterval(() => {
        this.nextSlide()
      }, this.interval)
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer)
        this.autoplayTimer = null
      }
    },
    handleItemClick(item) {
      if (item.link) {
        this.$router.push(item.link)
      }
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 20px;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  position: relative;
  height: 100%;
  cursor: pointer;
}

.carousel-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 20px;
}

.carousel-title {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
}

.carousel-description {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background: white;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background-color 0.3s;
}

.carousel-arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}
</style> 