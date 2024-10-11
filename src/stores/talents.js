import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllTalents, getOneTalents, getSingleTalentPortfolio } from '@/services/Talents'

export const useTalentsStore = defineStore('talents', () => {
  const talent = ref({})
  const singleTalent = ref({})
  const talentPortfolio = ref({})
  
  const allTalents = async (page, filters) => {
    try {
      talent.value = await getAllTalents(page, filters);
      return talent.value;
    } catch (error) {
      console.error("Error fetching talents:", error);
    }
  };
  
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
    talentPortfolio
  }
})
