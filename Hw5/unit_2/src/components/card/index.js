import React from "react";
import './card.css';
import img from '../../img/1.jpg';

function Card({data}){
    console.log(data);
    return(
        <>
            <div className="wraper-card">
                {data.map(element => {
                    return(
                        <div className ="my-card">
                            <div className = "my-title">
                                <h3 className="titel-info">Информация Сотрудника</h3>
                                <button className ="btn">&#215;</button>
                            </div>
                                <div className = "my-img"><img src ={img}></img></div>
                                <div className="form-user">
                                <p>
                                    <label className="form-label">Name:</label>
                                    <input className="form-control" placeholder={element.name} />
                                </p>
                                <p>
                                    <label className="form-label">Username:</label>
                                    <input className="form-control" placeholder={element.username}/>
                                </p>
                                <p>
                                    <label className="form-label">Email:</label>
                                    <input className="form-control" placeholder={element.email} />
                                </p>
                                <p>
                                    <label className="form-label">Phone:</label>
                                    <input className="form-control" placeholder={element.phone} />
                                </p>
                                <p>
                                    <label className="form-label">Website:</label>
                                    <input className="form-control" placeholder={element.website}/>
                                </p>
                            </div>
                            <div>
                                <h3>Адрес:</h3>
                                <p>{element.address.city},{element.address.street},{element.address.street},{element.address.zipcode}</p>
                                <h3>Компания:</h3>
                                <p><label className="form-label">Name: </label>{element.company.name}</p>
                                <p><label className="form-label">CatchPhrase: </label>{element.company.catchPhrase}</p>
                                <p><label className="form-label">Bs: </label>{element.company.bs}</p>
                                
                                
                            </div>
                        </div> 
                    )})};
            </div>
        </>
    )
}
export default Card;