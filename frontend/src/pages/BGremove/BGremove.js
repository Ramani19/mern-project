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
  const [back, setBack] = useState();
  const inputRef = useRef();
  const refer = useRef();

  useEffect(() => {
    if (img) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPrev(fileReader.result);
      };

      fileReader.readAsDataURL(img);
    } else {
      setPrev(null);
    }
  }, [img]);
  const formData = new FormData();

  const uploadImage = async (files) => {
    const a = await convertBase64(files);
    const imageData = a.substring(a.indexOf(",") + 1);
    formData.append("file", imageData);
    
    setBase64(a);

    const send = formData.get("file");
    console.log(send)
    
    axios
      .post("http://mern-ramani.heroku.com/upload", { sending: send })
      .then(async (res) => {
        const x = res.data.data.result_b64;
        
        await setBack(`data:image/jpeg/png/jpg/svg;base64,${x}`);
        console.log(back);

        setPrev(null);
      });
  };

  const convertBase64 = (files) => {
    return new Promise((resolve, reject) => {
      const fileRead = new FileReader();
      fileRead.readAsDataURL(files);
      fileRead.onload = () => {
        resolve(fileRead.result);
      };
      fileRead.onerror = (e) => {
        reject(e);
      };
    });
  };
  
  
  const abc =  prev ? prev : back ;
  

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
          {img ? (
            <div className="afterPreview">
              <img src={abc} className="image" />
              <button className="bgButton" onClick={() => { setImg(null)}}>clear image</button>
             { back && <a href={abc} className='bgButton' download= 'image.png'>download image</a> }    </div>
          ) : (
            <div className="beforePreview">
              <div className="beforeInside">
                <img src={upload} />
                <p>File should be png,jpg and less than 5mb</p>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  style={{ display: " none " }}
                  onChange={(e) => {
                    const files = e.target.files[0];
                    if (files) {
                      setImg(files);
                    } else {
                      setImg(null);
                    }
                    uploadImage(files);
                  }}
                />
                <button className="bgButton"
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

          {/* {
            (back
             ? (
              <div className="afterPreview">
                <img src={back} className="image" />
                <button
                  onClick={() => {
                    //setImg(null);
                    submitData();
                  }}
                >
                  download image
                </button>
              </div>
            ) : (
              <div className="beforePreview">
                <div className="beforeInside">
                  <img src={upload} />
                  <p>File should be png,jpg and less than 5mb</p>
                  <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    style={{ display: " none " }}
                    onChange={(e) => {
                      const files = e.target.files[0];
                      if (files) {
                        setImg(files);
                      } else {
                        setImg(null);
                      }
                      uploadImage(files);
                    }}
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
            ))
          } */}
        </div>
      </div>
    </div>
  );
};

export default BGremove;

