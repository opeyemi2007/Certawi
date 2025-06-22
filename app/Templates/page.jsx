'use client'

import React, { useState } from "react";
import styles from "./template.module.scss";

import Filter from "./modal";

// template card images
import cardimg from "./assets/Rectangle1.png";
import cardimg2 from "./assets/Rectangle2.png";
import cardimg3 from "./assets/Rectangle3.png";
import cardimg4 from "./assets/Rectangle4.png";
import cardimg5 from "./assets/Rectangle5.png";
import cardimg6 from "./assets/Rectangle6.png";
import cardimg7 from "./assets/Rectangle7.png";
import cardimg8 from "./assets/Rectangle8.png";
import cardimg9 from "./assets/Rectangle9.png";
import cardimg10 from "./assets/Rectangle10.png";
import cardimg11 from "./assets/Rectangle11.png";
import premiumicon from "./assets/Vector.svg";
import filtericon from "./assets/setting.svg";
import addicon from "./assets/add-square.svg";
import Image from 'next/image'

export default function Page() {
  const [modalState, setModalState] = useState(false);
  const [category, setCategory] = useState([]);

  const cardImages = [
    { id: 1, url: cardimg, type: "recognition", layout: "landscape" },
    { id: 2, url: cardimg2, type: "recognition", layout: "landscape" },
    { id: 3, url: cardimg3, type: "completion", layout: "landscape" },
    { id: 4, url: cardimg4, type: "completion", layout: "landscape" },
    { id: 5, url: cardimg5, type: "appreciation", layout: "landscape" },
    { id: 6, url: cardimg6, type: "appreciation", layout: "landscape" },
    { id: 7, url: cardimg7, type: "completion", layout: "landscape" },
    { id: 8, url: cardimg8, type: "completion", layout: "landscape" },
    { id: 9, url: cardimg9, type: "appreciation", layout: "landscape" },
    { id: 10, url: cardimg10, type: "completion", layout: "landscape" },
    { id: 11, url: cardimg11, type: "completion", layout: "landscape" },
  ];

  let categories = category;

  const closeModal = () => {
    setModalState(false);
  };

  const childToParent = (clickedCategory) => {
    categories.push(clickedCategory);
  };

  const applySelectCategories = () => {
    setCategory(categories);
  };

  return (
    <div className={styles['template-wrapper']}>
      <header>
        <h1>Templates</h1>

        <div className={styles['top-container-div']}>
          <p>All results</p>

          {categories.length === 0 ? null : (
            <button
              onClick={() => setCategory([])}
              className={styles['clear-btn']}
            >
              Clear All Filters
            </button>
          )}
        </div>

        <button
          className={styles['filter-btn']}
          onClick={() => setModalState(!modalState)}
        >
          Filters{" "}
          <span>
            <Image src={filtericon} alt="" />
          </span>
        </button>

        <Filter
          modalClose={closeModal}
          open={modalState}
          selectedCategory={childToParent}
          applyCategories={applySelectCategories}
          setCategory={setCategory}
        />
      </header>

      <div className={styles['cards-container']}>
        <div className={styles['template-card']}>
          <div className={styles['template-card__header']}>
            <h2>Blank Canvas</h2>
            <button>
              Premium
              <Image src={premiumicon} alt="" />
            </button>
          </div>
          <div className={styles['template-card__icon']}>
            <a href="/">
              <Image src={addicon} alt="card" />
            </a>
          </div>
        </div>

        {cardImages
          .filter((item) => {
            return category.length === 0 ? item : category.includes(item.type);
          })
          .map((item) => {
            return (
              <div key={item.id} className={styles['template-card']}>
                <div className={styles['template-card__img']}>
                  <a href="/">
                    <Image src={item.url} alt="card" />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
