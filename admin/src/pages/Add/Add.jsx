import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../../assets/assets'; 

const Add = () => {
  const [image, setImage] = useState(null);

  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"

  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  return (
    <div>
      <div className='add'>
        <form className='flex-col'>
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload" />
            </label>
            <input 
              type="file" 
              id="image" 
              hidden 
              required 
              onChange={(e) => setImage(e.target.files[0])} 
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} type="text" name='name' placeholder="Type here" required />
          </div>

          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea 
              name="description" 
              cols="30" 
              rows="6" 
              placeholder='Write content here' 
              required 
            />
          </div>

          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product category</p>
              <select name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className="add-price flex-col">
              <p>Product price</p>
              <input type="number" name='price' placeholder='$20' required />
            </div>
          </div>

          <button type='submit' className='add-btn'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default Add;
