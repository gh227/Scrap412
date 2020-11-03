export function extractUser(req){
if(!req.user)return null
const {_id, name, email, admin} = req.user;
return{_id, name, email, admin};
}

export function extractComments(req) {
    if (!req.comments) return null;
    const {
      _id, post_id, comment
    } = req.comments;
    return {
        _id, post_id, comment
    };
  }