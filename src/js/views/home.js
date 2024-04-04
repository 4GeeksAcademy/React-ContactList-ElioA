import React, { useState, useEffect, useContext } from "react";
import DeleterModal from "../component/modal";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	
	const { store, actions } = useContext(Context);
	const list = store.contacts
	const navigate = useNavigate()
	console.log(list)
	return(
		<>
	<div className="container myDiv">
		{list.map((item,index)=>(
		<div className="contact border border-black position-relative" key={index}>
			<div className="contact position-relative" onClick={()=>{actions.saveContactOnStore(item.name,item.address,item.phone,item.email,item.id)
		navigate("/contact")}}>
				<img className="listImg" src="https://picsum.photos/seed/picsum/200/300" width={170} height={170}/>
					<div className="contactText">
					<h3>{item.name}</h3>
					<p><i className="fas fa-map-marker-alt"></i> {item.address}</p>
					<p><i className="fas fa-phone"></i> {item.phone}</p>
					<p><i className="fas fa-envelope"></i> {item.email}</p>
					</div>
			</div>	
			<div className="position-absolute top-0 end-0 buttons">
				<button className="btn btn-outline-secondary contactButton" onClick={()=>{actions.saveContactOnStore(item.name,item.address,item.phone,item.email,item.id)
				navigate("/single")}}><i className="fas fa-pen-fancy"></i></button>
				<DeleterModal onClick={actions.saveContactOnStore(item.name,item.address,item.phone,item.email,item.id)}/>
			</div>
			
		</div>))}
		
	</div>
	</>
)}
