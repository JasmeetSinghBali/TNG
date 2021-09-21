// get articles by id stored locally in data.js 
import {articles} from '../../../data';

export default function handler({ query: {id} },res){
    // req.query.id holds the id in the request params
    const filtered = articles.filter(article=>article.id===id);
    if(filtered.length>0){
        return res.status(200).json(filtered[0]);
    }
    return res.status(404).json({
        message:`Article : ${id} Not Found in data.js..`
    });
}