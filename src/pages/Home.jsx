import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error found in fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid:col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 space-y-10 space-x-5">
          {posts.map( (post) => (
            <Product key={posts.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="className='flex justify-between h-screen items-center max-w-6xl mx-auto'">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
