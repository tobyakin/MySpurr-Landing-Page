import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllSkills, getJobTitle } from '@/services/Skills'

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref({})
  const jobTitle = ref({})
  const contriesCode = ref({})
  const states = ref({})
  const getskills = async () => {
    try {
      skills.value = await getAllSkills()
      return skills.value
    } catch (error) {
      console.error('Error fetching skills :', error)
    }
  }
  const getJobTitles = async () => {
    try {
      jobTitle.value = await getJobTitle()
      return jobTitle.value
    } catch (error) {
      console.error('Error fetching job title :', error)
    }
  }
const industries = ref([
  { name: 'Advertising' },
  { name: 'Marketing' },
  { name: 'Public Relations' },
  { name: 'Digital Marketing' },
  { name: 'Performing Arts' },
  { name: 'Visual Arts' },
  { name: 'Entertainment' }

  // 'Advertising',
  // 'Marketing',
  // 'Public Relations',
  // 'Digital Marketing',
  // 'Performing Arts',
  // 'Visual Arts',
  // 'Entertainment',
  // 'Media Production',
  // 'Graphic Design',
  // 'Web Design',
  // 'UX/UI Design',
  // 'Industrial Design',
  // 'Writing and Content',
  // 'Copywriting',
  // 'Content Creation',
  // 'Editing',
  // 'Journalism',
  // 'Software Development',
  // 'IT Support',
  // 'Data Science',
  // 'Cybersecurity',
  // 'Fashion Design',
  // 'Modeling',
  // 'Beauty and Cosmetics',
  // 'Styling',
  // 'Film and Photography',
  // 'Film Production',
  // 'Photography',
  // 'Video Editing',
  // 'Cinematography',
  // 'Music Production',
  // 'Composition',
  // 'Performance',
  // 'Sound Engineering',
  // 'Fitness',
  // 'Nutrition',
  // 'Wellness Coaching',
  // 'Holistic Health',
  // 'Teaching',
  // 'Training and Development',
  // 'E-Learning',
  // 'Education Administration',
  // 'Culinary Arts',
  // 'Baking and Pastry',
  // 'Culinary Management',
  // 'Food Styling',
  // 'Finance',
  // 'Business Development',
  // 'Project Management',
  // 'Entrepreneurship',
  // 'Game Development',
  // 'Game Design',
  // 'Gaming Content Creation',
  // 'Esports',
  // 'Architecture',
  // 'Construction',
  // 'Urban Planning',
  // 'Interior Design',
  // 'Social Work',
  // 'Counseling',
  // 'Nonprofit Management',
  // 'Community Outreach'
])
  return {
    skills,
    getskills,
    getJobTitles,
    jobTitle,
    contriesCode,
    states,
    industries
  }
})