<template>
  <!-- form course -->
  <form
		@submit.prevent="submitFormCourse"
    class="mb-8 lg:mr-8 bg-white p-6 rounded shadow-md"
    style="width: 25rem"
  >
    <header class="flex justify-end items-start mb-[5px]">
      <button
        @click.prevent="closeModal"
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
      <div class="mb-3 leading-normal">
        <h1
          class="text-center text-[20px] mb-[40px] font-semibold text-gray-600"
        >
          {{ dataCourse && dataCourse.id ? 'Edit Course' : 'Create Course' }}
        </h1>

        <label class="text-sm font-semibold text-gray-600"
          >Please enter your name.</label
        >
        <input
					v-model="dataCourse.name"
          class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear"
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <label class="text-sm font-semibold text-gray-600"
          >Please enter your url.</label
        >
        <input
					v-model="dataCourse.url"
          class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear"
          name="image"
          type="text"
          placeholder="Enter your url"
        />

        <label class="text-sm font-semibold text-gray-600"
          >Please enter your content.</label
        >
        <textarea
					v-model="dataCourse.content"
          class="resize-none mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear"
          name="content"
          type="text"
          placeholder="Enter your content"
        ></textarea>
      </div>
    </content>

    <footer class="flex justify-end align-center">
      <button
        @click.prevent="closeModal"
        class="mr-3 p-3 text-sm font-semibold border-2 border-grey-light rounded hover:bg-grey-light focus:bg-grey-light focus:border-blue trans-all-linear"
        type="button"
      >
        Cancel
      </button>
      <button
        class="py-[3px] px-[30px] text-sm text-white font-semibold bg-[#d2bfa0] hover:bg-[#e4d2b3] rounded"
        tabindex="0"
        type="submit"
      >
        {{ dataCourse && dataCourse.id ? 'Edit' : 'Create' }}
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
      this.$modal.close({ name: 'modalCourse' })
    },
		submitFormCourse(){
			this.$emit('emitSubmitFormCourse', this.dataCourse)
		}
  }
}
</script>

<style>
</style>
