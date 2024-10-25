import React, { useEffect, useState } from 'react'
import { MdBlock } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import './Rating.css'

function Rating() {
    const [arr, setarr] = useState([1, 2, 3, 4, 5])
    const [show, setshow] = useState(true)
    const [rate, setrate] = useState(0)
    const [obj, setobj] = useState({})
    const [list, setlist] = useState([])

    useEffect(() => {
        let newlist= JSON.parse(localStorage.getItem("rating"))||[]
        setlist(newlist)
    }, [setlist])
    

    // setobj({...rate,star:rate})
    let setchange = (e) => {
        let value = e.target.value
        let neww = { ...obj, review: value }
        setobj(neww)
    }

    let save = (e) => {
        e.preventDefault();
        let newobj = { ...obj, star: rate }
        let newlist = [...list, newobj]
        setlist(newlist)
        localStorage.setItem("rating" ,JSON.stringify(newlist))
        console.log(newlist);
        setobj({})
        setrate(0)
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>rating</h1>
                <form method='post' onSubmit={(e) => { save(e) }}>
                    <button onClick={() => { setshow(show == false) }}>{show == true ? <MdBlock style={{ fontSize: "30px", marginTop: "10px" }} /> : "undo"}
                    </button>
                    {
                        <>
                            {show == true &&
                                arr.map((val, i) => {
                                    i += 1
                                    return (
                                        <FaStar onClick={() => { setrate(i) }} style={rate >= i ? { color: "blue" } : ""} />
                                    )
                                })
                            }
                            <button type='button' onClick={()=>{setrate(0)}}>reset</button>
                            <textarea name="" id="" onChange={(e) => { setchange(e) }} value={obj.review?obj.review:""}></textarea>
                        </>
                    }
                    <input type="submit" />
                </form>
            </div>
            <div className="container">
                <div className='main'>
                    {
                        list.map((val, i) => {
                            return (
                                <>
                                    <div className='reviews'>
                                        <div className='review-sec' style={{border:'1px solid black'}}>
                                            <div>
                                                {val.star == 1 &&
                                                    <FaStar  className='stars'/>
                                                }
                                                {val.star == 2 &&
                                                    <>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                    </>
                                                }
                                                {val.star == 3 &&
                                                    <>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                    </>
                                                }
                                                {val.star == 4 &&
                                                    <>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                    </>
                                                }
                                                {val.star == 5 &&
                                                    <>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                        <FaStar className='stars'/>
                                                    </>
                                                }
                                                
                                                <h1>{val.review}</h1>
                                                <button>edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Rating