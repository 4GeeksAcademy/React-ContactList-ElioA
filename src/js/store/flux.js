const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: {
				name:null,
				address:null,
				phone:null,
				email:null,
				id:null
			},
			contacts:[],
			slug: "elio_slug"
		},
		actions: {
			addContact: (name,address,phone,email)=>{
				const store=getStore();
				return({
					name: name,
					address: address,
					phone: phone,
					email: email,
				})
			},
			
			addToList:(contact)=>{
				const store=getStore()
				const newContact = [...store.contacts,contact]
				setStore({contacts:newContact})
				fetch(`https://playground.4geeks.com/contact/agendas/elio_slug/contacts`, {
					method: "POST",
				   body: JSON.stringify(contact),
				   headers: {"Content-Type": "application/json"}
				   }).then(resp => {
					   console.log(resp.ok);
					   console.log(resp.status);
					 return resp.json(); 
				   }).then(data => {
					   console.log(data); 
				   }).catch(error => {
					   console.log(error);
				   });

			},
			getMyList: () => {
				const store=getStore()
				fetch("https://playground.4geeks.com/contact/agendas/elio_slug/contacts", {
                    method: "get",
                   headers: {"Content-Type": "application/json"}
                   }).then(resp => {
                       console.log(resp.ok);
                       console.log(resp.status);
                     return resp.json(); 
                   }).then(list => {
                       setStore({contacts:[...store.contacts, ...list.contacts]})
                   }).catch(error => {
					console.log(error)
				   });
				   
			},
			deleteContact:(id) =>{
				const store=getStore()
				const newList = [...store.contacts].filter(contact =>contact.id !== id)
				setStore({contacts:newList})
				fetch(`https://playground.4geeks.com/contact/agendas/elio_slug/contacts/${id}`, {
                    method: "DELETE",
                   headers: {"Content-Type": "application/json"}
                   }).then(resp => {
                       console.log(resp.ok);
                       console.log(resp.status); 
                   }).then(list => {})
				   .catch(error => {console.log(error)});
			
			},
			saveContactOnStore: (name,address,phone,email,id)=>{
				const store=getStore();
				store.contact.name=name,
				store.contact.address=address,
				store.contact.phone=phone,
				store.contact.email=email
				store.contact.id=id
				console.log(store.contact)
			},
			editContact:(contact)=>{
				const store=getStore()
				const newContact = [...store.contacts,contact]
				setStore({contacts:newContact})
				fetch(`https://playground.4geeks.com/contact/agendas/elio_slug/contacts/${store.contact.id}`, {
					method: "PUT",
				   	body: JSON.stringify(contact),
				   	headers: {"Content-Type": "application/json"}
				   }).then(resp => {
					   console.log(resp.ok);
					   console.log(resp.status);
					 return resp.json(); 
				   }).then(data => {
					   console.log(data); 
				   }).catch(error => {
					   console.log(error);
				   });
			},

			createList: ()=>{
				fetch(`https://playground.4geeks.com/contact/agendas/elio_slug`, {
					method: "POST",
				   headers: {"Content-Type": "application/json"}
				   }).then(resp => {
					   console.log(resp.ok);
					   console.log(resp.status);
					 return resp.json(); 
				   }).then(data => {
					   console.log(data); 
				   }).catch(error => {
					   console.log(error);
				   });
			},
			verifyName: (name) => {
				const store=getStore()
				if(name === ""){store.contact.name}
				else {return name}
			},
			verifyPhone: (phone) => {
				const store=getStore()
				if(phone === ""){store.contact.phone}
				else {return phone}
			},
			verifyAddress: (address) => {
				const store=getStore()
				if(address === ""){store.contact.address}
				else {return address}
			},
			verifyEmail: (email) => {
				const store=getStore()
				if(email=== ""){store.contact.email}
				else {return email}
			},
		},
	};
};

export default getState;
