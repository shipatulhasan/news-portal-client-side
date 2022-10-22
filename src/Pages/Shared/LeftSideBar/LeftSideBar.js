import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


const LeftSideBar = () => {
    const [categories,setCategories] = useState([])
    const [loader,setLoader] = useState(false)
    

    useEffect(()=>{
        setLoader(true)
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
            setLoader(false)
        })
    }, [])
    return (
        <div>
            <h5 className="mb-4">All categories</h5>

            {
                loader && <p>Loading..........</p>
            }
            {
                categories.map( category => {
                   
                    return <h6 key={category.id} className='mb-3' ><Link className='text-danger '  to={`/category/${category.id}`} >{category.name}</Link></h6>

                })
                
                
            }
        </div>
    );
};

export default LeftSideBar;