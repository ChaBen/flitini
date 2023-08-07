<script setup lang="ts">
import { useStepCounter } from '@/stores/counter'

const counter = useStepCounter()

const questionData = [
  {
    step: 1,
    title: 'What do you really want?',
    questions: [
      'Meet someone',
      'Flirt in chat',
      'Serious \n relationships',
      'I’m just bored',
    ],
    type: 'column',
  },
  {
    step: 2,
    title: 'What’s ideal age range?',
    questions: ['18-24', '25-35', '36+'],
    type: 'row',
  },
]
function itemClick(event) {
  const items = event.target.parentElement.querySelectorAll('.question-item')
  items.forEach((item) => {
    item.classList.remove('is-animated')
  })
  event.target.classList.add('is-animated')
  event.target.addEventListener(
    'animationend',
    async () => {
      const regForm = document.querySelector('.reg-form')
      counter.increment()
      regForm.classList.add('is-animated-next')
      await new Promise((resolve) => setTimeout(resolve, 250))
      regForm.classList.remove('is-animated-next')
      // regForm.onanimationend = () => {
      //   regForm.classList.remove('is-animated-next')
      // }
      console.log('animationend')
    },
    false
  )
}
</script>

<template>
  <main class="main">
    <div class="center">
      <div class="reg-form-container">
        <div class="reg-form">
          <div
            v-for="(item, index) of questionData"
            :class="`form-step-item ${
              counter.step === index + 1 && 'is-active'
            }`"
            :data-quiz-step-index="index + 1"
          >
            <div class="step-title">{{ item.title }}</div>
            <div class="question-block" :data-question-type="item.type">
              <div
                v-for="quetion of item.questions"
                class="question-item"
                @click="itemClick($event, item)"
              >
                <p class="question-title">{{ quetion }}</p>
              </div>
            </div>
          </div>

          <div
            class="form-step-item"
            data-step-name="getapp"
            data-quiz-step-index="12"
          >
            <div class="girls-number">
              <span class="j-gen-1">8</span>
              <span class="j-gen-2">3</span>
            </div>
            <div class="form-step-title">
              GIRLS
              <span>you will probably admire:</span>
            </div>
            <img
              src="/landing/resource/id/606d3c73829f447caa65af0d949e13e0.webp"
              alt=""
              class="step-img"
            />
            <a
              href="https://flirtiniapp.onelink.me/NwHS?af_js_web=true&amp;af_ss_ver=2&amp;pid=w2a_snap&amp;c=sc_w2a_ios_usa_m_reg_MarissaСlone2&amp;af_ad=70864_s_faces_inst_359_3&amp;af_adset=quizcas_reg_Marissa_28.06"
              tabindex="0"
              class="submit-btn"
            >
              <span class="loader">get the app</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main,
main .center,
.reg-form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 1;
}

main {
  padding: 30px 0 20px;
  text-align: center;
}

.reg-form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
}

.form-step-item {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
}

.form-step-item .form-item {
  margin-top: 40px;
}

[data-step-name='smscode'].form-step-item .form-item {
  margin-top: 30px;
}

.form-step-item.is-animated-prev {
  -webkit-transform: translate(-100vw);
  transform: translateX(-100vw);
}

.form-step-item.is-active {
  display: flex;
}

body:not([data-current-step-name^='step']) .form-step-item.is-active {
  -webkit-animation: fadeInBottom 0.2s linear both;
  animation: fadeInBottom 0.2s linear both;
}

.form-step-item .form-step-title {
  font-weight: 900;
  font-size: 20px;
}

.form-step-item .highlight {
  color: var(--primary);
}

.form-step-item .step-title {
  font-weight: 900;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 30px;
}

.form-field-block {
  margin-bottom: 10px;
}

main .center {
  padding: 0;
}

.prev-btn-quiz {
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.progress-block {
  display: flex;
}

.reg-form-container {
  overflow: hidden;
}

.reg-form {
  -webkit-transform: translate(0vw);
  transform: translate(0vw);
  -webkit-transition: transform 0.25s linear;
  transition: transform 0.25s linear;
}

.reg-form.is-animated-next {
  -webkit-transform: translate(-100vw);
  transform: translateX(-100vw);
}

.reg-form.is-animated-prev {
  -webkit-transform: translate(100vw);
  transform: translateX(100vw);
}

.form-step-item {
  padding: 0 20px;
  flex-shrink: 0;
}

.question-block {
  display: grid;
  grid-gap: 8px;
  height: 100%;
}

.question-block .question-title {
  font-style: italic;
  font-size: 18px;
  line-height: 24px;
  font-weight: 800;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  white-space: pre;
}

.question-block .question-title span {
  display: inline-block;
  white-space: nowrap;
}

[data-question-type='column'] {
  grid-template-columns: 1fr 1fr;
}

[data-question-type='column'] .question-item {
  padding: 10px 16px;
  cursor: pointer;
}

.question-item {
  position: relative;
  z-index: 2;
  padding: 12px 20px;
  text-align: left;
  border-radius: 20px;
  background: no-repeat center bottom;
  background-size: 100% auto;
}

.question-item:after {
  content: '';
}

.question-item.is-animated {
  background-blend-mode: hard-light;
  -webkit-animation: blinkItem 0.5s linear both;
  animation: blinkItem 0.5s linear both;
}

.question-item.is-animated:before {
  -webkit-animation: fadeIn 0.3s 0.1slinear both;
  animation: fadeIn 0.3s 0.1s linear both;
}

.question-item:before {
  content: '';
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 72px;
  height: 72px;
  margin: auto;
  border-radius: 50%;
  background: url(/image/checked.svg), var(--gradient-primary);
  border: 4px solid #fff;
  pointer-events: none;
}

[data-quiz-step-index='1'] .question-item:nth-child(1) {
  background-image: url(/image/question-bg1-1.webp), var(--gradient-accent-2);
}

[data-quiz-step-index='1'] .question-item:nth-child(2) {
  background-image: url(/image/question-bg1-2.webp), var(--gradient-primary);
}

[data-quiz-step-index='1'] .question-item:nth-child(3) {
  background-image: url(/image/question-bg1-3.webp), var(--gradient-success);
}

[data-quiz-step-index='1'] .question-item:nth-child(4) {
  background-image: url(/image/question-bg1-4.webp), var(--gradient-accent);
}

[data-quiz-step-index='2'] .question-item:nth-child(1) {
  background-image: url(/image/question-bg2-1.webp), var(--gradient-success);
}

[data-quiz-step-index='2'] .question-item:nth-child(2) {
  background-image: url(/image/question-bg2-2.webp), var(--gradient-accent);
}

[data-quiz-step-index='2'] .question-item:nth-child(3) {
  background-image: url(/image/question-bg2-3.webp), var(--gradient-primary);
}

[data-quiz-step-index='3'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/6346aa8ea75aefe39e4edf4b9336d54c.png),
    var(--gradient-primary);
}

[data-quiz-step-index='3'] .question-item:nth-child(1):after {
  background-image: url(/landing/resource/id/ead1f43c4179d1050c0f808a99bd089e.png),
    url(/landing/resource/id/c621d658df7d9881d1ff6783af83c861.png);
}

[data-quiz-step-index='3'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/b1c3fc368ed6bb6494d927db2177bb6e.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='4'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/ead1f43c4179d1050c0f808a99bd089e.png),
    var(--gradient-success);
}

[data-quiz-step-index='4'] .question-item:nth-child(1):after {
  background-image: url(/landing/resource/id/c9f991d77cd8ce86539fab07641c65b7.png),
    url(/landing/resource/id/27c22f49b6be3948e5a9542869bfa041.png),
    url(/landing/resource/id/a8e0f0c5e02e61f1d1c4a2bc5df38e91.png),
    url(/landing/resource/id/37640cc389bd90a64e753b90fa13e8d6.png);
}

[data-quiz-step-index='4'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/c621d658df7d9881d1ff6783af83c861.png),
    var(--gradient-primary);
}

[data-quiz-step-index='5'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/c9f991d77cd8ce86539fab07641c65b7.png),
    var(--gradient-accent);
}

[data-quiz-step-index='5'] .question-item:nth-child(1):after {
  background-image: url(/landing/resource/id/f3112d6baeb514e64ed8982b62874db4.webp),
    url(/landing/resource/id/65bd30e93053facc839979fd066bbb55.png),
    url(/landing/resource/id/72b1408c6338903185fbe0a6f8439839.png),
    url(/landing/resource/id/0b2bfa074e59f6f00da1298214d43cc6.png);
}

[data-quiz-step-index='5'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/27c22f49b6be3948e5a9542869bfa041.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='5'] .question-item:nth-child(3) {
  background-image: url(/landing/resource/id/a8e0f0c5e02e61f1d1c4a2bc5df38e91.png),
    var(--gradient-success);
}

[data-quiz-step-index='5'] .question-item:nth-child(4) {
  background-image: url(/landing/resource/id/37640cc389bd90a64e753b90fa13e8d6.png),
    var(--gradient-primary);
}

[data-quiz-step-index='6'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/f3112d6baeb514e64ed8982b62874db4.webp),
    var(--gradient-primary);
}

[data-quiz-step-index='6'] .question-item:nth-child(1):after {
  background-image: url(/landing/resource/id/c5f6000e72c1155924fa372d6168d25e.png),
    url(/landing/resource/id/a8e2c11294668f0985c411f30925b3f1.png);
}

[data-quiz-step-index='6'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/65bd30e93053facc839979fd066bbb55.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='6'] .question-item:nth-child(3) {
  background-image: url(/landing/resource/id/72b1408c6338903185fbe0a6f8439839.png),
    var(--gradient-accent);
}

[data-quiz-step-index='6'] .question-item:nth-child(4) {
  background-image: url(/landing/resource/id/0b2bfa074e59f6f00da1298214d43cc6.png),
    var(--gradient-success);
}

[data-quiz-step-index='7'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/c5f6000e72c1155924fa372d6168d25e.png),
    var(--gradient-primary);
}

[data-quiz-step-index='7'] .question-item:nth-child(1):after {
  background-image: url(/landing/resource/id/17d23bb7e810671d0fb841c0217352e4.png),
    url(/landing/resource/id/d029b335c78539340f414af598daa679.png),
    url(/landing/resource/id/99cf6c172fdd39cfb4f101faa3af1375.png),
    url(/landing/resource/id/fcf08a272b25e3c0f61ea53447eba6a8.png);
}

[data-quiz-step-index='7'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/a8e2c11294668f0985c411f30925b3f1.png),
    var(--gradient-accent);
}

[data-quiz-step-index='8'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/17d23bb7e810671d0fb841c0217352e4.png),
    var(--gradient-success);
}

[data-quiz-step-index='8'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/d029b335c78539340f414af598daa679.png),
    var(--gradient-primary);
}

[data-quiz-step-index='8'] .question-item:nth-child(3) {
  background-image: url(/landing/resource/id/99cf6c172fdd39cfb4f101faa3af1375.png),
    var(--gradient-accent);
}

[data-quiz-step-index='8'] .question-item:nth-child(4) {
  background-image: url(/landing/resource/id/fcf08a272b25e3c0f61ea53447eba6a8.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='9'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/282cf57ff403845f1f76cba1f79658e2.png),
    var(--gradient-primary);
}

[data-quiz-step-index='9'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/50874b182795dafd734e26f44bf38ab4.png),
    var(--gradient-success);
}

[data-quiz-step-index='9'] .question-item:nth-child(3) {
  background-image: url(/landing/resource/id/e1d6d1ea05d58895fb1bceca59a47d27.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='9'] .question-item:nth-child(4) {
  background-image: url(/landing/resource/id/e5fd13653b6b8615693fcf90f57aa0e7.png),
    var(--gradient-accent);
}

[data-quiz-step-index='10'] .question-item:nth-child(1) {
  background-image: url(/landing/resource/id/5e6ce62da11dd9ec5b6e4cfbb17573a0.png),
    var(--gradient-accent-2);
}

[data-quiz-step-index='10'] .question-item:nth-child(2) {
  background-image: url(/landing/resource/id/85ce0e447a74bcccf1eaf728b776c952.png),
    var(--gradient-primary);
}

[data-quiz-step-index='10'] .question-item:nth-child(3) {
  background-image: url(/landing/resource/id/3fc37f1974feac386b85aa813a29b2f9.png),
    var(--gradient-success);
}

[data-quiz-step-index='10'] .question-item:nth-child(4) {
  background-image: url(/landing/resource/id/8acd15a21f609ad83af4c9e43790e20c.png),
    var(--gradient-accent);
}

[data-step-name='loader'] {
  padding: 0 0 50px;
  text-align: center;
}

[data-step-name='loader'] .loader-block {
  margin: auto;
}

[data-step-name='loader'] .loader {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 164px;
  margin: 0 auto;
}

[data-step-name='loader'] .loader:before,
[data-step-name='loader'] .loader:after {
  content: '';
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  transition: var(--transition);
}

[data-step-name='loader'] .loader:before {
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  background: #8000ff;
  opacity: 0.6;
  filter: blur(25px);
}

[data-step-name='loader'] .loader:after {
  opacity: 0;
  top: 3px;
  right: 3px;
  bottom: 3px;
  left: 3px;
  border: 2px solid #8256ff;
}

[data-step-name='loader'] .rabbit-gif {
  display: block;
  width: 160px;
  border-radius: 50%;
  overflow: hidden;
}

[data-step-name='loader'] .loader-gif {
  position: absolute;
  top: -14px;
  left: -14px;
  width: 116%;
}

[data-step-name='loader'] .analyzing-block {
  margin-block: 64px;
  transition: var(--transition);
}

[data-step-name='loader'] p {
  font-weight: 600;
  font-size: 16px;
  color: #787878;
}

[data-step-name='loader'] .percent {
  font-weight: 800;
  font-size: 36px;
  line-height: 45px;
  margin-top: 15px;
  color: var(--light);
}

[data-step-name='loader'] .circle-wrapper {
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: var(--transition);
}

[data-step-name='loader'] .circle-wrapper img {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  animation: 70s linear both;
}

[data-step-name='loader'] .circle-wrapper img:nth-child(1) {
  left: -170px;
  width: 340px;
}

[data-step-name='loader'] .circle-wrapper img:nth-child(2) {
  width: 600px;
  left: -300px;
  animation-direction: reverse;
}

[data-step-name='loader'] .circle-wrapper img:nth-child(3) {
  width: 682px;
  left: -341px;
}

[data-step-name='loader'].is-loaded .loader:after {
  opacity: 1;
}

[data-step-name='loader'].is-loaded .circle-wrapper {
  opacity: 1;
}

[data-step-name='loader'].is-loaded .circle-wrapper img {
  animation-name: rotate;
}

[data-step-name='loader'].is-loaded .loader-gif,
[data-step-name='loader'].is-loaded .analyzing-block {
  opacity: 0;
}

.girls-number {
  margin-top: 15px;
}

.girls-number span {
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(114.38deg, #8256ff 34.84%, #fd56ff 88.7%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline-block;
  margin: 0 2px;
  padding: 3px 5px;
  border: 3px solid;
  border-image-slice: 1;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    114.38deg,
    #8256ff 34.84%,
    #fd56ff 88.7%
  );
}

[data-step-name='getapp'] .form-step-title {
  text-align: center;
  margin-top: 12px;
  font-weight: 800;
  font-size: 36px;
  line-height: 1;
}

[data-step-name='getapp'] .form-step-title span {
  display: block;
  font-size: 24px;
  line-height: 32px;
  margin-top: 5px;
}

.step-img {
  margin: 50px auto 35px;
  width: 100%;
  max-width: 350px;
  display: block;
}

.submit-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 32px;
  background: linear-gradient(112.24deg, #2aa1a9 5.01%, #a6d550 98.46%);
  border-radius: 35px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  margin: 35px auto;
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  width: 200px;
}

.submit-btn:before,
.submit-btn:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 196px;
  height: 56px;
  margin: auto;
  border: none;
  outline: none;
  background: linear-gradient(112deg, #2aa1a9 5%, #a6d550 98%);
  border-radius: 55px;
}

.submit-btn:before {
  animation: btnPulse 2.8s 1s ease-out both infinite;
}

.submit-btn:after {
  animation: btnPulse 2.8s 1.5s ease-out both infinite;
}

@-webkit-keyframes btnPulse {
  0% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  10% {
    opacity: 0.8;
    -webkit-transform: scale(1.15, 1.3);
    transform: scale(1.15, 1.3);
  }

  30% {
    opacity: 0.4;
    -webkit-transform: scale(1.2, 1.4);
    transform: scale(1.2, 1.4);
  }

  50% {
    opacity: 0;
    -webkit-transform: scale(1.25, 1.5);
    transform: scale(1.25, 1.5);
  }

  100% {
    opacity: 0;
  }
}

@keyframes btnPulse {
  0% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  10% {
    opacity: 0.8;
    -webkit-transform: scale(1.15, 1.3);
    transform: scale(1.15, 1.3);
  }

  30% {
    opacity: 0.4;
    -webkit-transform: scale(1.2, 1.4);
    transform: scale(1.2, 1.4);
  }

  50% {
    opacity: 0;
    -webkit-transform: scale(1.25, 1.5);
    transform: scale(1.25, 1.5);
  }

  100% {
    opacity: 0;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@-webkit-keyframes fadeInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes blinkItem {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  40% {
    -webkit-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
  }

  60% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
  }

  70% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
  }

  70% {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes fade {
  from {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  to {
    opacity: 0;
    transform: scale(0.8, 0.8);
  }
}

@media all and (max-height: 730px) {
  .girls-number {
    margin: 0;
  }

  .step-img {
    margin: 20px auto 10px;
    width: 85%;
  }

  .submit-btn {
    margin: 10px auto;
  }
}

@media all and (min-width: 768px) {
  header {
    padding-top: 32px;
  }

  main {
    padding: 56px 0;
  }

  .progress-block {
    margin-top: 32px;
  }

  .form-step-item[data-step-name^='step'] {
    align-items: center;
    flex-grow: unset;
    height: auto;
  }

  .question-block[data-question-type='column'] {
    grid-template-columns: 160px 160px;
  }

  .question-block[data-question-type='column'] .question-item {
    height: 218px;
  }

  .question-block {
    grid-template-columns: 327px;
    height: auto;
  }

  .question-block .question-item {
    height: 143px;
  }

  [data-current-step-index='3'] .question-block,
  [data-current-step-index='4'] .question-block,
  [data-current-step-index='7'] .question-block {
    grid-template-columns: 327px;
  }

  [data-current-step-index='3'] .question-block .question-item,
  [data-current-step-index='4'] .question-block .question-item,
  [data-current-step-index='7'] .question-block .question-item {
    height: 218px;
  }
}

.copyright-block {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  padding: 20px 10px;
  text-align: center;
  position: relative;
  z-index: 2;
  display: none;
}

[data-current-step-name='msisdn'] .copyright-block,
[data-current-step-name='smsCode'] .copyright-block,
[data-current-step-name='getapp'] .copyright-block {
  display: block;
}

.copyright-block a {
  text-decoration: underline;
  font-size: inherit;
  color: inherit;
}
</style>
