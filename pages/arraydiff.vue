<script lang="ts" setup>
// const list1 = ref<Number[]>([])
// const list2 = ref<Number[]>([])

// list1.value.push(...[5, 10])

// const difference = useArrayDifference(list1, list2)

import { useFileSystemAccess } from '@vueuse/core'
const { data, open, save } = useFileSystemAccess()
</script>

<template>
  <div>
    <!-- {{ difference.join(', ') }} -->
    <textarea v-model="data" cols="50" rows="20"></textarea>
    <p />
    <button @click="open">Open</button> |
    <button @click="save">Save</button>
  </div>
</template>

<style scoped></style>
