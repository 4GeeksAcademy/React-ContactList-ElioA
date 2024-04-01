const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],
			slug: "elio_slug"
		},
		actions: {
			addContact: (name,address,phoneNumber,email)=>{
				const store=getStore()
				return({
					name: name,
					address: address,
					phoneNumber: phoneNumber,
					email: email
				})
			},
			
			addToList:(contact)=>{
				const store=getStore()
				const newContact = [...store.contacts,contact]
				setStore({contacts:[newContact]})
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
                   }).catch(error => {});
				   
			}
		}
	};
};

export default getState;
