import React, { useState } from "react";
import styles from "./Styles/genre.module.css";
// import { useState } from "react";
function Genre() {
  const [selectedCards, setSelectedcards] = useState([])

  const CARDS = [
    {
      id: 1,
      name: "Action",
      image: "/images/action.png",
      bg: "rgba(255, 82, 9, 1)",
    },
    {
      id: 2,
      name: "Adventure",
      image: "/images/adventure.png",
      bg: "rgba(144, 37, 0, 1)",
    },
    {
      id: 3,
      name: "Fiction",
      image: "/images/fiction.png",
      bg: "rgba(108, 208, 97, 1)",
    },
    {
      id: 4,
      name: "Drama",
      image: "/images/drama.png",
      bg: "rgba(215, 164, 255, 1)",
    },
    {
      id: 5,
      name: "Horror",
      image: "/images/horror.png",
      bg: "rgba(115, 88, 255, 1)",
    },
    {
      id: 6,
      name: "Fantasy",
      image: "/images/fantasy.png",
      bg: "rgba(255, 74, 222, 1)",
    },
    {
      id: 7,
      name: "Romance",
      image: "/images/romance.png",
      bg: "rgba(20, 138, 8, 1)",
    },
    {
      id: 8,
      name: "Thriller",
      image: "/images/thriller.png",
      bg: "rgba(132, 194, 255, 1)",
    },
    {
      id: 9,
      name: "Music",
      image: "/images/music.png",
      bg: "rgba(230, 30, 50, 1)",
    },
  ];
  function handleSelect(card) {
    setSelectedcards((prevSelected) => {
      if (prevSelected.some((genre) => genre.id === card.id)) {
        // If the card is already selected, remove it
        return prevSelected.filter((genre) => genre.id !== card.id);
      } else {
        // If the card is not selected, add it
        return [...prevSelected, card];
      }
    });
  }
  
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.title}>Super app</h2>
          <h4 className={styles.subtitle}>
            Choose your
            <br />
            entertainment
            <br />
            Category
          </h4>
          <div className={styles.selectedlist}>
      
              {selectedCards.map((card, index) => (
                <div key={index} className={styles.bhanu}>

                  <p>{card.name}</p>
                  <span style={
                    {fontWeight:600,
                      color:'grey',
                      cursor:'pointer'
                    }
                  }
                  onClick={()=>{handleSelect(card)}}>X</span>
                </div>
            
              ))}
            
          </div>
        </div>
        <div className={styles.right}>
          {CARDS.map((genre) => (
            <div
              style={{ backgroundColor: genre.bg , border : selectedCards.some((selected) => selected.id === genre.id) ? '2px solid rgba(114, 219, 115, 1)':'none'}}
              className={styles.card}
              key={genre.id}
              onClick={()=>handleSelect(genre)}
            >
              <img
                src={genre.image}
                alt={genre.name}
                className={styles.cardImage}
              />
              <h2 className={styles.genretitle}>{genre.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Genre;