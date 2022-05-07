<template>
  <div v-if="visible" :data-modal="name" class="modal-overlay">
    <div>
      <slot :payload="payload"></slot>
    </div>
  </div>
</template>

<script>
import VModal from './handle'
export default {
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      visible: false,
      payload: null
    }
  },
  beforeMount() {
    VModal.EventBus.$on('close', params => {
      if (this.name === params.name) {
        this.close(params)
      }
    })

    VModal.EventBus.$on('open', params => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
  },
  methods: {
    close(params) {
      this.visible = false
    },
    open(params) {
      this.payload = params.payload
      this.visible = true
    }
  }
}
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000098;
  }
</style>
