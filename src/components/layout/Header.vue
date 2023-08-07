<script setup lang="ts">
import { useStepCounter } from '@/stores/counter'

const counter = useStepCounter()
</script>

<template>
  <header class="header">
    <div class="center">
      <div class="header-top-content">
        <!-- <span
          class="prev-btn-quiz"
          v-if="counter.step > 1"
          @click="counter.decrement()"
        >
          <img src="/image/back.svg" width="24" height="24" alt="arrow prev" />
        </span> -->
        <a class="logo-link" title="FLIRTINI">
          <img
            class="logo"
            src="/image/logo.webp"
            width="152"
            height="64"
            title="rabbit"
          />
        </a>
      </div>
      <div class="progress-block">
        <span
          class="progress-line"
          :style="`width: ${counter.step * 25}%`"
        ></span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: relative;
  z-index: 2;
  padding: 7px 0 0;
}

header .logo-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

header .logo {
  display: block;
  height: auto;
}

.header-top-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev-btn-quiz {
  cursor: pointer;
}

.progress-block {
  display: block;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 2px;
  margin-top: 9px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.12);
}

.progress-block .progress-line {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 2.63587px #fa0aff, 0.351449px 0 10px rgba(202, 50, 255, 0.6),
    0.175725px 0.702898px 0.702898px rgba(253, 49, 255, 0.88),
    1.05435px 1.58152px 0.702898px rgba(45, 0, 56, 0.32),
    -5px -1.5741px 5px rgba(255, 66, 202, 0.6),
    4.72229px 0.524699px 8px rgba(228, 0, 255, 0.6),
    0 0 16px rgba(255, 0, 246, 0.7), 0 -6.29638px 16px rgba(219, 0, 255, 0.7);
  border-radius: 2px;
  transition: var(--transition);
}
</style>
