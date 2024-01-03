import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllPortfolio } from '@/services/Portfolios'

export const usePorfolioStore = defineStore('portfolio', () => {
  const talentPortfolios = ref([])

  const allPorfolio = async () => {
    try {
      talentPortfolios.value = await getAllPortfolio()
      return talentPortfolios.value
    } catch (error) {
      console.error(error)
    }
  }
  return {
    allPorfolio,
    talentPortfolios
  }
})
