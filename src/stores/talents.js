import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllTalents, getOneTalents } from '@/services/Talents'

export const useTalentsStore = defineStore('talents', () => {
  const talent = ref({})
  const singleTalent = ref({})

  const allTalents = async () => {
    try {
      talent.value = await getAllTalents()
      return talent.value
    } catch (error) {
      console.error(error)
    }
  }
  const getSingleTalent = async (uuid) => {
    try {
      singleTalent.value = await getOneTalents(uuid)
      return singleTalent.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    talent,
    allTalents,
    singleTalent,
    getSingleTalent
  }
})
