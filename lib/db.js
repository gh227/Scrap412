export async function getPosts(req, cat) {
    const postsArray = await req.db
    .collection('posts')
    .find({category:cat})
    .sort({createdAt:-1})
    .toArray();

    if (!postsArray) return null;
    const posts = postsArray.map(value => {
      const {_id,image_link,caption,author,source,source_link,category,headings,abstract_cat,content} =value
      return {
        _id,
        image_link,
        caption,
        author,
        source,
        source_link,
        category,
        headings,
        abstract_cat,
      content}
    });
    return {posts}
  }

  export async function getSingle(req, title) {
    const singleFetch = await req.db
    .collection('posts')
    .findOne({caption:title});

    if (!singleFetch) return null;
      const {_id,image_link,caption,author,source,source_link,category,headings,abstract_cat,content, createdAt} =singleFetch
       const single ={
        _id,
        image_link,
        caption,
        author,
        source,
        source_link,
        category,
        headings,
        abstract_cat,
        content,
        createdAt:createdAt.toString()
    }
  
    return {single} 
  }
 
 export async function getSingleUpdated(req, _update, query) {
     console.log(_update, query);
    const singleFetch = await req.db
    .collection('posts')
    .findOne({[query]: _update});
    //console.log(title)

    if (!singleFetch) return null;
      const {_id, phoneNumber,code} =singleFetch
       const single ={
        _id,
        phoneNumber,
        code
    }
  
    return {single} 
  }


  export async function getLatest(req){
    const latestPosts = await req.db
    .collection('posts')
    .find({abstract_cat:'latest_news'})
    .limit(5)
    .sort({createdAt:-1})
    .toArray();

    if (!latestPosts) return null;
    const latest_news = latestPosts.map(value => {
      const {_id,image_link,caption,author,source,source_link,category,headings,abstract_cat,content} =value
      return {
        _id,
        image_link,
        caption,
        author,
        source,
        source_link,
        category,
        headings,
        abstract_cat,
      content}
    });
    return {latest_news}
  }

  export async function getTopNews(req){
      
    const topNews = await  req.db
    .collection('posts')
    .find({abstract_cat:'top_stories'})
    .limit(5)
    .sort({createdAt:-1})
    .toArray();

    if (!topNews) return null;
    
    const top_news = topNews.map(value => {
      const {_id,image_link,caption,author,source,source_link,category,headings,abstract_cat,content} =value
      return {
        _id,
        image_link,
        caption,
        author,
        source,
        source_link,
        category,
        headings,
        abstract_cat,
      content}
    });
    return {top_news}
  }