<template>
  <!-- form confirm -->
  <form
	@submit.prevent="submitFormConfirm"
    class="mb-8 lg:mr-8 bg-white py-[23px] px-[30px] rounded shadow-md"
    style="width: 25rem"
  >
    <header class="flex justify-end items-start mb-[10px]">
      <button
        @click.prevent="closeModal('modalConfirm')"
        class="border border-transparent focus:border-blue trans-all-linear"
        type="button"
      >
        <svg
          class="w-8 h-8 text-grey hover:text-grey-dark"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </button>
    </header>

    <content>
      <div class="leading-normal">
        <h1
          class="text-center text-[20px] mb-[40px] font-semibold text-gray-600"
        >
          Are you sure you want to delete<span class="text-[#d2bfa0]"> {{dataCourse.name}} </span>?
        </h1>
      </div>
    </content>

    <footer class="flex justify-end align-center">
      <button
        @click.prevent="closeModal('modalConfirm')"
        class="mr-3 p-3 text-sm font-semibold border-2 border-grey-light rounded hover:bg-grey-light focus:bg-grey-light focus:border-blue trans-all-linear"
        type="button"
      >
        Cancel
      </button>
      <button
        class="py-3 px-5 text-sm text-white font-semibold bg-[#d2bfa0] hover:bg-[#e4d2b3] rounded"
        tabindex="0"
        type="submit"
      >
        Xóa
      </button>
    </footer>
  </form>
</template>

<script>
export default {
   props: {
		course: {
			type: Object,
			require: false,
			default: () => ({
				name: '',
				url: '',
				content: ''
			})
		},
	},
  data(){
    return{
      dataCourse: this.course ? {...this.course} : {
        name: '',
        url: '',
        content: ''
      }
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'modalConfirm' })
    },
    submitFormConfirm(){
      this.$emit('emitSubmitFormConfirm', this.dataCourse)
    }
  },
}
</script>

<style>

</style>