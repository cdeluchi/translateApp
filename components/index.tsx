import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Router, { useRouter } from "next/router";

type LanguageSwitcherProps = {
  isOpen: boolean;
  content: string;
};

const LanguageSwitcher = ({ isOpen, content }: LanguageSwitcherProps) => {
  const classes = useStyle();

  const [checkIsOpen, setCheckIsOpen] = useState(false);
  const toggleModal = () => setCheckIsOpen(!checkIsOpen);
  const router = useRouter();

  const changeLang = (lang: string) => {
    setCheckIsOpen(!checkIsOpen);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <>
      {
        <button className={classes.button} onClick={toggleModal}>
          select the language
        </button>
      }

      {checkIsOpen && (
        <div
          className={classes.modalWrapp}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={classes.listWrapper}>
            <li className={classes.list} onClick={() => changeLang("pt")}>
              PT
            </li>
            <hr />
            <li className={classes.list} onClick={() => changeLang("en")}>
              EN
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

const useStyle = createUseStyles({
  button: {
    width: 150,
    height: 50,
    border: "none",
    borderRadius: 5,
    background: "#6B62FF",
    color: "white",
    cursor: "pointer",
  },

  modalWrapp: {
    width: 100,
    height: 50,
    padding: 10,
    borderRadius: 5,
    background: "#FF6584",
    position: "absolute",
    top: 50,
    left: 40,
  },
  list: {
    listStyle: "none",
    cursor: "pointer",
  },
  listWrapper: {
    margin: 0,
    padding: 0,
  },
});

export default LanguageSwitcher;
