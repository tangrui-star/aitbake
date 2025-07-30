<template>
  <div class="rating-stars">
    <span 
      v-for="i in maxStars" 
      :key="i"
      class="star"
      :class="getStarClass(i)"
      @click="handleStarClick(i)"
    >
      ★
    </span>
    <span v-if="showScore" class="rating-score">{{ score }}</span>
  </div>
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    value: {
      type: Number,
      default: 0
    },
    maxStars: {
      type: Number,
      default: 5
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    score() {
      return this.value.toFixed(1)
    }
  },
  methods: {
    getStarClass(starIndex) {
      return {
        'filled': starIndex <= this.value,
        'empty': starIndex > this.value,
        'clickable': !this.readonly
      }
    },
    handleStarClick(starIndex) {
      if (!this.readonly) {
        this.$emit('input', starIndex)
        this.$emit('change', starIndex)
      }
    }
  }
}
</script>

<style scoped>
.rating-stars {
  display: flex;
  align-items: center;
  gap: 2px;
}

.star {
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}

.star.filled {
  color: #FFD700;
}

.star.empty {
  color: #ccc;
}

.star.clickable:hover {
  color: #FFD700;
}

.rating-score {
  margin-left: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
</style> 