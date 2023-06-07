import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase"; // Assuming you have a Firebase configuration setup
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

function Fetch() {
  //list data
  const [data, setData] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "Restaurer"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // list image
  const storage = getStorage();

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "Articles/");
    listAll(listRef)
      .then((result) => {
        const items = result.items;

        const fetchImageUrls = async () => {
          const urls = await Promise.all(
            items.map((item) => getDownloadURL(item))
          );
          setImageUrls(urls);
        };

        fetchImageUrls();
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    // data

    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Budget</th>
    //         <th>Details</th>
    //         <th>Hauteur</th>
    //         <th>Largeur</th>
    //         <th>Longueur</th>
    //         <th>Material</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    // {data.map((item) => (
      //         <tr key={item.id}>
      //           <td>{item.id}</td>
      //           <td>{item.budget}</td>
      //           <td>{item.details}</td>
      //           <td>{item.hauteur}</td>
      //           <td>{item.largeur}</td>
      //           <td>{item.longueur}</td>
      //           <td>{item.material}</td>
      //         </tr>
      //       ))}
    //     </tbody>
    //   </table>
    // </div>

    // image
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Fetch;
