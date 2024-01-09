import './App.css';
import React, { useEffect, useState } from 'react';
import db from './firebaseConfig';
import { collection, getDoc, getDocs,addDoc, doc,updateDoc,deleteDoc } from 'firebase/firestore';

function App() {
  const [users,setUsers] = useState([])
  const [newName,setNewName] = useState('')
  const [newAge,setNewage] = useState(0)
  const userCollectionRefernce = collection(db,'users')
  const createUser = async()=>{
    const docRef = await addDoc(userCollectionRefernce,{
      name: newName,
      age: Number(newAge)
    })
    console.log('Document written with ID: ', docRef.id);
  }

  const updateAge = async(id,age)=>{
    const userDoc = doc(db,'users',id)
    const newField = {age:age+1}
    await updateDoc(userDoc,newField)
  }

  const deleteUser = async(id)=>{
    const userDoc = doc(db,'users',id)
    await deleteDoc(userDoc)
  }
  useEffect(()=>{
    const getUsers = async() =>{
      const data = await getDocs(userCollectionRefernce)
      setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      console.log(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    getUsers()
  },[])
  return (
    <div className="App">
      <input type='text' placeholder='Enter Name...' onChange={(event)=>setNewName(event.target.value)}/>
      <input type='number' placeholder='Enter Age...' onChange={(event)=>setNewage(event.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
      return(
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h2>Age: {user.age}</h2>
          <button onClick={()=>{updateAge(user.id,Number(user.age))}}>Add Age</button>
          <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
        </div>
      )
    })}</div>
  );
}

export default App;
