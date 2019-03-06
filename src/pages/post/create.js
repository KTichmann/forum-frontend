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
            {
                sessionStorage.getItem('token') ? <Input textAreaStyle={{height: "60vh"}} handleSubmit={handleSubmit} buttonValue={"Post"}/> : window.location.replace('/log-in')
            }
        </Layout>
    )
}

export default Create