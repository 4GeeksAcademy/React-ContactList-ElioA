import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	
	const { store, actions } = useContext(Context);
	const list = store.contacts
	console.log(list)
	return(
		<>
	<div className="text-center mt-5">
		{list.map((item,index)=>(<div key={index}>{item.name}<button>hello</button></div>))}
	</div>
	</>
)}
