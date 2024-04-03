import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



function Single() {
	const { store, actions } = useContext(Context);
	const [name,setName]= useState("")
	const [address,setAddress]=useState("")
	const [phone,setPhone]=useState("")
	const [email,setEmail]=useState("")
	const navigate = useNavigate()
	
	
	return (
		<div className="container">
			<h1>Edit your contact</h1>
			<div className="mb-3">
  				<label className="form-label">Full name</label>
  				<input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
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
  				<input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
			</div>
			<button type="button" className="btn btn-primary" onClick={()=>{actions.editContact(actions.addContact(actions.verifyName(name),actions.verifyAddress(address),actions.verifyPhone(phone),actions.verifyEmail(email)))
			location.reload()}}>Save changes
			</button>

		</div>
  )
}

export default Single