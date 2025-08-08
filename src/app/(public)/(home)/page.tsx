import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "@/shared/data/tweets/Tweets.data";

export default function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <ul className="space-y-4">
          {TWEETS?.map(tweet =>(    
            <Tweet key={tweet.author} tweet={tweet}/>
          ))} 
        </ul>
    </div>
  );
}
