import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllBlogs, getOneBlogSlug, getAllCategory, getAllRecent } from '@/services/Blog'

export const useBlogStore = defineStore('blog', () => {
  const blog = ref({})
  const singleBlog = ref({})
  const category = ref({})
  const recent = ref({})

  const allBlogs = async (page, category) => {
    try {
      blog.value = await getAllBlogs(page, category)
      return blog.value
    } catch (error) {
      console.error(error)
    }
  }

  const getSingleBlogSlug = async (slug) => {
    try {
      singleBlog.value = await getOneBlogSlug(slug)
      return singleBlog.value
    } catch (error) {
      console.error(error)
    }
  }

  const allCategory = async () => {
    try {
      blog.value = await getAllCategory()
      return blog.value
    } catch (error) {
      console.error(error)
    }
  }

  const allRecent = async () => {
    try {
      recent.value = await getAllRecent()
      return recent.value
    } catch (error) {
      console.error(error)
    }
  }

  return {
    blog,
    singleBlog,
    allBlogs,
    getSingleBlogSlug,
    category,
    allCategory,
    recent,
    allRecent,
  }

})



