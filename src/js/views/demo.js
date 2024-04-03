import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [name,setName]= useState("")
	const [address,setAddress]=useState("")
	const [phone,setPhone]=useState("")
	const [email,setEmail]=useState("")
	const navigate = useNavigate()
	
	
	
	
	return (
		<form className="container">
			<h1>Add a contact to your list</h1>
			<div className="mb-3">
  				<label className="form-label">Full name</label>
  				<input  required type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
			</div>
			<div className="mb-3">
  				<label className="form-label">Address</label>
  				<input type="text" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} />
			</div>
			<div className="mb-3">
  				<label className="form-label">Phone Number</label>
  				<input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
			</div>
			<div className="mb-3">
  				<label className="form-label">E-mail</label>
  				<input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
			</div>
			<button type="button" className="btn btn-primary" onClick={()=>{actions.addToList(actions.addContact(name,address,phone,email))
				window.location.reload()}}>
  				Add contact
			</button>
			
		</form>
	);
};
