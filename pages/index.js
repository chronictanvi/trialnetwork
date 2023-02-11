// THA HOMEPAGE

import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "../firebase.js";
import Head from "next/head";

import { Inter } from "@next/font/google";

import PostDisplay from "./components/PostDisplay.js";
import Grid from "./components/Grid.js";
import Form from "./components/Form.js";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const defaultPostsState = [
  ["this is a post", "this is another post", "this is the last post"],
  ["this a down post", "this is the next down post", "this is last down post"],
  ["this is  post rock bottom post", "this post is next rock bottom", null],
];

export default function Home() {
  const [postsArray, setPostsArray] = useState(defaultPostsState);

  const [coordinates, setCoordinates] = useState([0, 0]);

  //below: this is fetching the firebase database
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "posts"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  //hooks go inside component. hook start with use
  console.log(value, loading, error);

  return (
    <>
      <Head>
        <title>Comrade</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <section className="sm:p-20  w-full">
        <div className="text-white px-10"></div>
        <h1 className="text-9xl text-center">~</h1>
        <h2 className="text-xl p-10 text-center"> New ways of connecting </h2>
      </section>
      <div className=" text-white flex flex-col items-center">
        <Grid setCoordinates={setCoordinates}></Grid>
        <div className="grid grid-cols-2 gap-20 m-10">
          <div>
            <PostDisplay
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              postsArray={postsArray}
            />
          </div>
          <div>
            <Form
              setPostsArray={setPostsArray}
              postsArray={postsArray}
              coordinates={coordinates}
            ></Form>
          </div>
        </div>
      </div>

      {/* below is from https://github.com/csfrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045/firestore */}
      <div>
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <span>
              Collection:{" "}
              {value.docs.map((doc) => (
                <React.Fragment key={doc.id}>
                  {JSON.stringify(doc.data())},{" "}
                </React.Fragment>
              ))}
            </span>
          )}
        </p>
      </div>
    </>
  );
}
