
import axios from "axios"


var fectchBlogUrls =async () =>{
    try {
        var {data} = await axios.get("https://admin.edifycit.com/api/blogs?titlesOnly=true")
        var returedData = data.message.data.map(v=>{
            var obj = {
                url: `https://edifycit.com/blog/${v.slug}`,
                lastModified: v.createdAt,
                changeFrequency: 'weekly',
                priority: 0.8,
            }
            return obj
        })

        return returedData

    } catch (error) {
        
    }
}


var fectchCoursesUrls =async () =>{
    try {
        var {data} = await axios.get("https://admin.edifycit.com/api/courses?titlesOnly=true")
        var returedData = data.message.data.map(v=>{
            var obj = {
                url: `https://edifycit.com/courses/${v.slug}`,
                lastModified: v.createdAt,
                changeFrequency: 'weekly',
                priority: 0.8,
            }
            return obj
        })

        return returedData

    } catch (error) {
        
    }
}

export default async function sitemap() {

    var staticURLs = [
        {
            url: 'https://edifycit.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
          },
    ]

    var blogsDynamicUrls = await fectchBlogUrls()
    var coursesDynamicUrls = await fectchCoursesUrls()


    return [...staticURLs,...blogsDynamicUrls,...coursesDynamicUrls]
    
   
  }