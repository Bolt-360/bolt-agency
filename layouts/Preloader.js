"use client";
import { nextUtility } from "@/utility";
import { useEffect } from "react";
const Preloader = () => {
  useEffect(() => {
    nextUtility.preloader();
  }, []);
  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="L" className="letters-loading">
            L
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="3" className="letters-loading">
            3
          </span>
          <span data-text-preloader="6" className="letters-loading">
            6
          </span>
          <span data-text-preloader="0" className="letters-loading">
            0
          </span>
        </div>
        <p className="text-center">Carregando</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
