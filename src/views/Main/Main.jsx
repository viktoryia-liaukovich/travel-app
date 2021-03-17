import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import actions from "../../utils/actions";

import "./Main.scss";

export default function Main() {
  const { locale, dict } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/locale/${locale}`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: actions.ADD_LOCALE, payload: res }));
  }, []);

  return (
    <>
      <Header />
      <PromoBlock />
      <main className="main">
        <div className="container">
          <ul>
            <li>
              <Link to="/Belarus">{dict.BELARUS}</Link>
            </li>
            <li>
              <Link to="/Japan">Japan</Link>
            </li>
            <li>
              <Link to="/Sweden">Sweden</Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
