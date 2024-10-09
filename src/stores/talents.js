import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllTalents, getOneTalents, getSingleTalentPortfolio } from '@/services/Talents'

export const useTalentsStore = defineStore('talents', () => {
  const talent = ref({})
  const singleTalent = ref({})
  const talentPortfolio = ref({})

  const allTalents = async (page) => {
    try {
      talent.value = await getAllTalents(page)
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
  const SingleTalentPortfolio = async (id) => {
    try {
      talentPortfolio.value = await getSingleTalentPortfolio(id)
      return singleTalent.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    talent,
    allTalents,
    singleTalent,
    getSingleTalent,
    SingleTalentPortfolio,
    talentPortfolio,
  }
})
