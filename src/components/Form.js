import React,{useState} from 'react'
// import DatePicker from 'react-datepicker'
const Form = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [userDetails,setUserDetails]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNo:"",
        city:"",
        state:"",
        country:""

    })
    const {firstName,lastName,email,phoneNo,city}=userDetails;
    const handleChange=(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName==="" || lastName===""|| email==="")
        {
            alert("please fill all required fields..")
        }
        else{
            alert("successfull ");
        }

    }
    return (
        <div className='ui container' style={{marginTop:"50px"}}>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className=" required field">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange}/>
                </div>
                <div className="required field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange}/>
                </div>
                {/* <div className="field">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                 */}
                    
                    <div className=" required field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email"  value={email} onChange={handleChange}/>
                    </div>
                    <div className="required field">
                        <label>Phone No</label>
                        <input type="number" name="phoneNo" value={phoneNo}  onChange={handleChange} />
                    </div>
                    <div className="required field">
                        <label>City</label>
                        <textarea rows="2" name="city" value={city} onChange={handleChange}></textarea>
                    </div>
                    <div className="required field">
                        <label>State</label>
                        <select className="ui fluid dropdown">
                            <option value="">State</option>
                            <option value="TS">Telangana</option>
                            <option value="AP">AndraPradhesh</option>
                            <option value="KT">Karnataka</option>
                            <option value="TN">Tamilnadu</option>
                        </select>
                    </div>
                    <div className=" required field">
                        <label>Country</label>
                        <select className="ui fluid dropdown">
                            <option value="">Country</option>
                            <option value="IN">India</option>
                            <option value="CS">China</option>
                            <option value="PS">Pakistan</option>
                            <option value="US">America</option>
                        </select>
                    </div>
                    
                <button className="ui primary button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
