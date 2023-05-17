import { useState, useEffect} from 'react';

function App() {
  const [products, setProducts] = useState([]);
  
  const getShop2_14 = async () =>{
     try{
        const response = await fetch('https://rkhoglxqggcnlzaizchy.supabase.co/rest/v1/shop2_14?select=*',{
        method: 'Get',
        headers:{
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJraG9nbHhxZ2djbmx6YWl6Y2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc4NjgsImV4cCI6MTk5ODA2Mzg2OH0.oGdw1Ugb2Mk0DeTrDllMV3irg5W-vew6xekrWioNQJA",
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJraG9nbHhxZ2djbmx6YWl6Y2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODc4NjgsImV4cCI6MTk5ODA2Mzg2OH0.oGdw1Ugb2Mk0DeTrDllMV3irg5W-vew6xekrWioNQJA"
        }
      })
        const data = await response.json();
        console.log('shop2 data',data);
        setProducts(data)
     }catch(error){  
      console.log(error);
     }
  }

  useEffect(()=>{
    getShop2_14();
  }, []);

  return (
    <div className="shop-page">
      <div className="collection-page">
        <h1 className="title">All Product -- Supabase shop2</h1>
        <div className="items">
          { products.map( (product) => {
            const {name,price,local_url} = product;
            return (
              <div className="collection-item">
              <img className="image" src={local_url} />
              <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
              </div>
              <button className="custom-button">Add to Cart</button>
            </div>
             )
            })}
        </div>
      </div>
    </div>

  );
}

export default App;
