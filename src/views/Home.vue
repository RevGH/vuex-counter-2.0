<template>
  <div class="home">
    <h1>Ludvigs Miniprojekt: Vuex Counter App 2.0</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
      <h2>Your number is</h2>
      <!-- Component imports -->
         <counter />                             
         <counter-squared />   
         <buttons />
         <buttons-random />
        <color-code />
      <!-- Component imports END -->
    </div>
</template>

<script>
import ColorCode from '../components/ColorCode.vue';
export default {
  name: "Home",
  components: {
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'buttons': require('@/components/Buttons.vue').default,
    'buttons-random': require('@/components/ButtonsRandom.vue').default,
    'color-code': require('@/components/ColorCode.vue').default
  }
}
</script>

<style>
h2 {
  font-size: 32px;
}

div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.counter-squared {
  font-size: 26px;
}

sup {
  font-size: 12px;
  margin-left: -5px;
}

button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
