/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from "react";
import "./BGremove.css";
import axios from "axios";
import card1 from "../../images/card1.svg";
import upload from "../../images/upload.svg";

const BGremove = () => {
  const [img, setImg] = useState(null);
  const [prev, setPrev] = useState(null);
 const [base64, setBase64] = useState();
  const inputRef = useRef();

  useEffect(() => {
    if (img) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPrev(fileReader.result);
      };
     
     fileReader.readAsDataURL(img)
     

     
    } else {
      setPrev(null);
    }
  }, [img]);
  const formData = new FormData()

 
  //const uploadImage = async (e) => {
  //e.preventDefault()
  // console.log(inputRef.current.click())
  // console.log(inputRef.current.files[0])
  //  const files = e.target.current.files[0]
  //  setImg(files)
  //  const fileReader1 = new FileReader();
  //    const image = fileReader1.readAsDataURL(files);
  
  // const baseImg = await convertBase64(files)
  // setBase64(baseImg)
  //const image = req.body.image;

  // const imageData = image.substring(image.indexOf(",") + 1);
  const uploadImage = async (files) => {
    const a =await convertBase64(files)
    const imageData = a.substring(a.indexOf(",") + 1);
    formData.append('file',imageData)
    console.log(imageData)
    setBase64(a)
  }

  const convertBase64 = (files) => {
    return new Promise((resolve, reject)=>{
      const fileRead = new FileReader();
      fileRead.readAsDataURL(files);
      fileRead.onload = ()=>{
        resolve(fileRead.result);
      };
      fileRead.onerror = (e) => {
        reject(e)
      }
    })

  }
  const submitData = () => {
    axios.post("http://localhost:3001/upload",{formData})
  }
 
   
   

  return (
    <div className="total">
      <div className="backRemove">
        <div className="backInside">
          <h1>Remove Image background</h1>
          <p>100% automatic and free</p>
          <img src={card1} />
        </div>
      </div>
      <div className="upload">
        <div className="uploadInside">
          {prev ? (
            <div className="afterPreview">
              <img src={prev} className="image" />
              <button
                onClick={() => {
                  //setImg(null);
                  submitData();
 
                }}
              >
                clear image
              </button>
            </div>
          ) : (
            <div className="beforePreview">
           <div className="beforeInside">
              <img src={upload} />
              <p>File should be png,jpg and less than 5mb</p>
              <input type="file" accept="image/*"
                ref={inputRef}
                style={{ display: " none " }}
                onChange={(e) => {
                  const files = e.target.files[0];
                  if (files) {
                    setImg(files);
                  } else {
                    setImg(null);
                  }
                  uploadImage(files)
                 
                }
               }
              />
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  inputRef.current.click();
                  
                  
                }}
              >
                upload
              </button>
            </div>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default BGremove;
{
  /* <button onClick={() => {
             setImg(null)
           } }>clear image</button><button onClick={remove}>remove background</button></> */
}
