<script lang="ts" setup>
import { useArrayDifference, useConfirmDialog } from '@vueuse/core'

const { isRevealed, reveal, confirm, cancel, onConfirm } = useConfirmDialog()

//const difference = useArrayDifference(list1, list2)

onConfirm(() => {
  alert('Inter')
  //6pucjqr5u5ewsyldcyj2mvi4gta73ln6hfp2iud36sngkkkdxura
})
</script>
<template>
  <div>
    <button class="btn" @click="reveal">Delete</button>
    <div
      class="modal"
      :class="{
        'modal-open': isRevealed,
      }"
    >
      <div class="modal-box">
        <h3 class="font-bold text-lg">Confirm delete</h3>
        <p class="py-4">Are you sure you want to delete this item?</p>
        <div class="modal-action">
          <button class="btn btn-neutral" @click="cancel">Cancel</button>
          <button class="btn btn-primary" @click="confirm">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
