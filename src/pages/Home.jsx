import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import PlayerComponent from "./PlayerComponent";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-fulltext-center">
          <div className="flex flex-wrap">
            <div className="w-full">
              <PlayerComponent />
            </div>
            <div className="relative bottom-96 left-64 text-white text-6xl fadelnleft">
                <h1>Welcome to our <span className="text-[#ff7f11]">community</span></h1>
              </div>
          </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
