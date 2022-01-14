<template>
      <div class="buttons-random">
      <button @click="$store.dispatch('decreaseRandomCounter')">-?</button>
      <button @click="$store.dispatch('increaseRandomCounter')">+?</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>