<script setup>
import { ref } from 'vue'

const msg = ref('EX UNIVERSITAT SEMPER ALIQUID NOVI')
let answer = ref('')
let result = ref('')

function checkAnswer(){
  if (msg.value == answer.value) { 
    result.value = 'BONUM!' 
  } else result.value = 'MALUM!'
}

</script>

<template>
  <p>
    <center>
    Si voca verbi in correcto dissignatum <br>
    secreto revelatum erit in conspectu vestrum <br><br>
    Scripta in maiuscula, gratias tibi ago<br><br>
    <input v-model="answer" /><br>
    <button v-on:click="checkAnswer">Comprobare</button><br>
    <p>{{result}}</p>
    </center>
  </p>
  <nav>
    <center>
    <RouterLink to="/">I. </RouterLink>
    <RouterLink to="/secunda">II. </RouterLink>
    <RouterLink to="/tertera">III. </RouterLink>
    <RouterLink to="/quatar">IV. </RouterLink>
    <RouterLink to="/quinta">V. </RouterLink>
    </center>
  </nav>
  <main>
    <RouterView />
  </main>
</template>