<script setup>
import supabase from "../utils/supabaseConfig.js";
import {ref} from "vue";
const userInfo = ref({});
const getUser = async () => {

  const { data: { user } } = await supabase.auth.getUser()
  userInfo.value = user
  console.log(userInfo)

}
getUser()
</script>

<template>
<div>
  <h1>{{userInfo.email}}</h1>
</div>
</template>

<style scoped>

</style>