// import { createContext } from "react";

import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext=createContext()

export const NewsProvider=({children})=>{
const initialState={
    news:[

        // {
        //     "source": {
        //       "id": null,
        //       "name": "Thefly.com"
        //     },
        //     "author": null,
        //     "title": "Cerence announces continued strategic partnership with what3words",
        //     "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        //     "url": "https://thefly.com/permalinks/entry.php/id3639587/CRNC-Cerence-announces-continued-strategic-partnership-with-whatwords",
        //     "urlToImage": "https://thefly.com/images/meta/hotstocks.jpg",
        //     "publishedAt": "2023-01-04T13:13:26Z",
        //     "content": "Cerence and what3words announce their continued strategic partnership to supply their voice-powered navigation solution to leading automakers around the globe. The number of cars on the road with the… [+676 chars]"
        //   },
        //   {
        //     "source": {
        //       "id": null,
        //       "name": "Business Standard"
        //     },
        //     "author": "Business Standard",
        //     "title": "Cabinet approves Rs 19,500 cr for National Green Hydrogen Mission",
        //     "description": "Plan to have four components; domestic manufacturing of electrolysers key focus area",
        //     "url": "https://www.business-standard.com/article/economy-policy/cabinet-approves-rs-19-500-cr-for-national-green-hydrogen-mission-123010400991_1.html",
        //     "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/06/full/1654507150-0787.jpg",
        //     "publishedAt": "2023-01-04T13:12:00Z",
        //     "content": "The Union Cabinet on Wednesday approved an initial outlay of Rs 19,500 crore for the National Hydrogen Mission, which was launched by the Prime Minister in his speech on the 75th Independence Day in … [+3966 chars]"
        //   }
    ]
}
const [ state, dispatch]=useReducer(NewsReducer,initialState)
    return(
        <NewsContext.Provider value={{...state, dispatch}}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext;