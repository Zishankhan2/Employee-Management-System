import React from 'react'
import Header from '../others/Header'
import CreateTASK from '../others/CreateTASK.JSX'
import AllTask from '../others/AllTask'


const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7 '>
            <Header changeUser={props.changeUser} />
            <CreateTASK />
            <AllTask />

        </div>
    )
}

export default AdminDashboard
