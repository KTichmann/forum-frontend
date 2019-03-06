import React from 'react';
import Layout from "../../components/layout"
import Input from "../../components/input"

const Create = () => {
    const handleSubmit = () => {
        //Check if post or title are empty
        //Check if user can make the post
    }

    return (
        <Layout>
            <input type="text" placeholder="Title" style={
                {
                    width: "100%", marginBottom: "3rem",
                    padding: ".5rem",
                    fontFamily: "Ubuntu, sans-serif",
                    width: "100%",
                    marginBottom: "3rem",
                    border: ".1px solid rgba(0,0,0, .1)" 
                }
            }/>
            
            {
                sessionStorage.getItem('token') ? <Input textAreaStyle={{height: "60vh"}} handleSubmit={handleSubmit} buttonValue={"Post"}/> : window.location.replace('/log-in')
            }
        </Layout>
    )
}

export default Create