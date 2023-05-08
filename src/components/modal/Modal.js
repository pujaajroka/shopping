import React, { useState } from 'react'
import './modal.css'


const Modal = (props) => {
    const [size, setSize] = useState('')
    const handleAdd = () => {
        props.handleAdd(size)
    }
    const handleCancel = (size) => {
        props.handleCancel()
    }
    return (
        <>
            <div className='overlay show'>
                <div className="standard-modal">
                   {props.type === 'cart' && props.product.size.length &&
                   <>
                    <div className="radio-group">
                          { props.product.size.map((t, i) => {
                              return <div key={i}><input value={t}  type='radio' name="size"
                               onChange={(e) => setSize(e.target.value)}/> {t}</div>
                           })  
                        }
                    </div> 
                    <div className='btn-group'>
                        <button className="btn" onClick={handleCancel}>Cancel</button>
                        <button className="btn" onClick={handleAdd}>Add</button>
                    </div> 
                    </>               
                   } 
                </div>

            </div>
        </>
    )
}

export default Modal;

