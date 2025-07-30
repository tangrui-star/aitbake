<template>
  <button 
    class="app-button"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="button-icon">{{ icon }}</span>
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return [
        `btn-${this.type}`,
        `btn-${this.size}`,
        {
          'btn-full-width': this.fullWidth,
          'btn-disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #007AFF;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0056CC;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #F8F9FA;
  color: #333;
  border: 1px solid #E0E0E0;
}

.btn-secondary:hover:not(:disabled) {
  background: #E9ECEF;
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: #007AFF;
  border: 1px solid #007AFF;
}

.btn-outline:hover:not(:disabled) {
  background: #007AFF;
  color: white;
  transform: translateY(-1px);
}

.btn-danger {
  background: #DC3545;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: #C82333;
  transform: translateY(-1px);
}

.btn-small {
  padding: 8px 16px;
  font-size: 14px;
}

.btn-medium {
  padding: 12px 24px;
  font-size: 16px;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

.btn-full-width {
  width: 100%;
}

.button-icon {
  font-size: 18px;
}

.button-text {
  font-weight: 500;
}

.app-button:active:not(:disabled) {
  transform: translateY(0);
}
</style> 