import axios from "axios";

const instance = axios.create({
	baseURL: "https://662ba758de35f91de1590899.mockapi.io/",
});

export const requestContacts = async () => {
	const { data } = await instance.get("/contacts");
	return data;
};

export const deleteContactsById = async id => {
	const { data } = await instance.delete(`/contacts/${id}`);
	return data;
};

export const addContacts = async contact => {
	const { data } = await instance.post("/contacts", contact);
	return data;
};
