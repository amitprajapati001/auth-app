import React, {useState} from 'react'
import {Button,Card, Alert} from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function Dashboard() {

    const [error, setError]= useState("")
    const {currentUser, signout}=useAuth()
    const history = useHistory()

    async function handleSignout(){

        setError("")
        try {

            await signout()
            history.push("/login")
            
        } catch {
            setError("failed to signout")
            
        }

    }


  return (
    <>
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>{currentUser.email}
      <Link to ="/updateProfile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
        </Card.Body>
    </Card>

      <div className="mt-2 w-100 text-center">
        <Button variant='link' onClick={handleSignout}>Sign Out</Button>
        </div>
      
    </>
  )
}
