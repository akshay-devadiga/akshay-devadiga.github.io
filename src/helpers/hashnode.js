const axios = require("axios")

export const getAllPostsFromHashNode = async ()=>{
    let response = await axios({
        url: 'https://api.hashnode.com/',
        method: 'post',
        data: {
          query: `{
            user(username:"akshay-devadiga") {
              publication {
                posts (page:0) {
                  title
                  slug
                  cuid
                }
              }
            }
          }`
        }
      });
    
  return  response&&response.data&&response.data.data&&response.data.data.user&&response.data.data.user.publication&&response.data.data.user.publication.posts

}