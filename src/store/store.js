import { reactive } from 'vue'

export const store = reactive({
  selectedSection: 'HomeSection',
  changeSelectedSection(newSection) {
    this.selectedSection = newSection
  }
})