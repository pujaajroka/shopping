import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../Redux/apiCalls";
import { useDispatch, useSelector  } from "react-redux";
import Spinner from "../../components/spinner/spinner";
import { useRef } from "react";

export default function NewProduct() {
  const fileType = useRef();
  const productName = useRef();
  const productDesc = useRef();
  const productCategories = useRef();
  const productPrice = useRef();
  const productIfFeature = useRef();
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [feature, setFeature] = useState(false);
  const [isFormHasError, setIsFormHasError] = useState(false);
  const [isNewProductAdded, setNewProductAdded] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isProductAddFail = useSelector((state) => state.product.error);
  const isFetching = useSelector((state) => state.product.isFetching)

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFeature = (e) => {
        setFeature(e.target.checked)
  }

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const resetProductForm = () => {
        fileType.current.value = "";
        productCategories.current.value = "";
        productDesc.current.value = "";
        productName.current.value = "";
        productPrice.current.value = "";
        productIfFeature.current.value = ""
  }
  const validateForm = () => {
      let error = false;
      const elem = document.querySelectorAll('.required');
      setIsFormHasError(false)
      elem.forEach(input => {
          if(input.value === ''){
            error = true; 
            input.classList.add('error');
            setIsFormHasError(true)
          } else {
            input.classList.remove('error');
          }
      });
      return error;
  }
  const handleClick = (e) => {
    e.preventDefault();
    if(validateForm()) {
        return false;
    }
   
    //we will upload file and call api
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...input, img: downloadURL, categories: cat, feature: feature };
            addProduct(product, dispatch);     
            if(products && !isProductAddFail){   
              setNewProductAdded(true);              
                  resetProductForm();
                  setTimeout(() => {
                    setNewProductAdded(false);
                  }, 3000);
            } else {
              setNewProductAdded(false)
            }
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add New Product</h1>
      {isNewProductAdded ? <p className="banner success"> Product added successfully!</p> : ''}
      {isFormHasError ?  <p className="banner error"> Please fill all required fields</p> : ''}
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Product Image</label>
          <input
            type="file"
            id="file"
            ref={fileType}
            className="required"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
       
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            ref={productName}
            className="required"
            placeholder="Women Tshirt"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            className="required"
            placeholder="Description.."
            ref={productDesc}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            className="required"
            placeholder="100"
            ref={productPrice}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Catagories</label>
          <input type="text" placeholder="jeans, skirt"  className="required" ref={productCategories} onChange={handleCat} />
        </div>
        
        <div className="addProductItem">
          <label>Stock</label>
          <select name="isStock" onChange={handleChange}>
            <option value="true"> Yes</option>
            <option value="false"> No </option>
          </select>
        </div>

        <div className="addProductItem">
          <br/>
           <div><input type="checkbox"  ref={productIfFeature} onChange={handleFeature} />  &nbsp; Feature product </div>
        </div>

        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
      { isFetching ? 
           <Spinner/> : ''
      }
     
    </div>
  );
}
